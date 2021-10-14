/* eslint import/no-anonymous-default-export:off, require-yield: off */
import { take, all, takeEvery, delay, put } from 'redux-saga/effects'
import { STUDENTSET, STUDENTCLEAR, createClearStudentAction } from '../action/student'

export default function* () {
    console.log('任务已启动')
    // all指令 
    // 用于管控多个指令
    yield all([watchStudentSet(), watchStudentClear(), watchEveryStudentSet()])
    console.log('任务已结束')
}

function* watchStudentSet() {
    // take指令
    // yield后面应该放一些合适的saga执行, 如果是普通数据则不会特殊处理, 会阻塞执行
    // take执行只会监听一次Action变化, 可通过死循环持续监听变化
    // while (true) {
    //     const action = yield take(STUDENTSET)
    //     console.log('已设置学生数据', action)
    // }
}

function* watchStudentClear() {
    while (true) {
        const action = yield take(STUDENTCLEAR)
        console.log('已清空学生数据', action)
    }
}

function* watchEveryStudentSet() {
    // takeEvery指令
    // 不会阻塞, 在发生变化后会调用第二个参数传入的函数
    yield takeEvery(STUDENTSET, followTask)
    console.log('正在使用takeEvery指令监控Action: STUDENTSET')
}

function* followTask() {
    // delay指令
    //  阻塞一段时间
    yield delay(2000)
    // put指令
    //  重新触发dispatch
    yield put(createClearStudentAction())
    console.log('takeEvery回调已被触发')
}
