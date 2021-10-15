/* eslint import/no-anonymous-default-export:off, require-yield: off */
import { take, all, takeEvery, delay, put, call, select, fork, cancel, takeLatest, cancelled, race } from 'redux-saga/effects'
import { STUDENTSET, FETCHSTUDENT, STUDENTCLEAR, createClearStudentAction, createFetchStudentAction, createGetAllStudent } from '../action/student'
import { getAllStudent } from '../../utils/tools'

export default function* () {
    console.log('saga任务已启动')
    yield all([watchStudentFetch()])
    // race指令
    // let result = yield race({
    //     a1: call(asyncGet),
    //     a2: call(asyncGet),
    //     a3: call(asyncGet),
    //     a4: call(asyncGet),
    //     a5: call(asyncGet)
    // })
    // console.log('拿到结果', result)
    console.log('saga任务已结束')
}

function* watchStudentFetch() {
    // 流程控制(及其有意思): 监听开始 -> 开始 -> 打印 -> 监听结束 -> 结束 -> 结束打印 -> 监听开始
    // yield fork(function* () {
    //     while (true) {
    //         console.log('开始监听开始')
    //         yield take('start')
    //         console.log('触发开始监听已结束')
    //         const task = yield fork(function* () {
    //             try {
    //                 while (true) {
    //                     yield delay(1000)
    //                     console.log('打印')
    //                 }
    //             }
    //             finally {
    //                 if (yield cancelled()) {
    //                     console.log('任务线已被取消')
    //                 }
    //             }
    //         })
    //         console.log('开始监听停止')
    //         yield take('stop')
    //         console.log('触发停止监听已结束')
    //         yield cancel(task)
    //     }
    // })

    // 利用race更加精妙的设计
    yield fork(function* () {
        while (true) {
            console.log('开始监听开始')
            yield take('start')
            console.log('触发开始监听已结束')
            yield race({
                start: call(function* () {
                    while (true) {
                        yield delay(1000)
                        console.log('打印')
                    }
                }),
                stop: take('stop')
            })
            // console.log('开始监听停止')
            // yield take('stop')
            // console.log('触发停止监听已结束')
            // yield cancel(task)
        }
    })




    // yield fork(newStudentTask)
    // yield fork(watchClearStudent)
    // // yield takeLatest(STUDENTCLEAR, function* () {
    // //     yield delay(2000)
    // //     console.log('芜湖! 🛫')
    // // })
    // yield takeEvery(FETCHSTUDENT, studentFetchCallBack)
    // console.log('正在监听Action: fetchStudent')
}

function* studentFetchCallBack() {
    console.log('回调已被触发')
}

function* newStudentTask() {
    console.log('将于2s后自动获取学生')
    yield delay(2000)
    let result = yield call(getAllStudent)
    console.log('将于2s后将学生数据放入仓库中')
    yield delay(2000)
    yield put(createGetAllStudent(result.data))
    console.log('将于3s后清除学生数据')
    yield delay(3000)
    yield put(createClearStudentAction())
    yield put(createClearStudentAction())
    yield put(createClearStudentAction())
}

function* watchClearStudent() {
    let task;
    while(true) {
        yield take(STUDENTCLEAR)
        if (task) { // 这样的作法有点像防抖的意思
            // 取消上次的任务
            yield cancel(task)
            console.log('已取消上次的任务')
        }
        task = yield fork(function* () {
            yield delay(2000)
            console.log('芜湖! 🛫')
        })
    }
}

// 简易实现takeEvery

function myTakeEvery (action, callback) {
    return fork(function* () {
        while(true) {
            yield take(action)
            yield fork(function* () {
                yield call(callback)
            })
        }
    })
}

function asyncGet() {
    const time = Math.floor(Math.random() * (4000 - 1000) + 1000)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.5) {
                resolve('start')
            } else {
                reject('stop')
            }
        }, time)
    })
}

