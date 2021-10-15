/* eslint import/no-anonymous-default-export:off, require-yield: off */
import { all, takeEvery, delay, put, call, select } from 'redux-saga/effects'
import { STUDENTSET, FETCHSTUDENT, STUDENTCLEAR, createClearStudentAction, createFetchStudentAction, createGetAllStudent } from '../action/student'
import { getAllStudent } from '../../utils/tools'

export default function* () {
    console.log('saga任务已启动')
    yield all([watchStudentFetch()])
    console.log('saga任务已结束')
}

function* watchStudentFetch() {
    yield takeEvery(FETCHSTUDENT, studentFetchCallBack)
}

function* studentFetchCallBack() {
    console.log('准备向服务器请求数据')
    // saga碰见promise会自动等待
    // 尽量不要这样调用函数
    // let result = yield getAllStudent()
    // call指令
    // 自动执行函数, 如果返回一个Promise则会进行等待
    // 和正常的call基本一致, 第一个参数为函数, 后续为参数, 第一个参数可以为对象/数组, 可以改变其函数的this指向
    //      对象: {context: '123', fn: getAllStudent}
    //      数组: ['123', getAllStudent]
    let result = yield call(getAllStudent)
    console.log('已成功向服务器拿到响应')
    console.log('正在设置学生数据')
    yield put(createGetAllStudent(result.data))
    console.log('学生数据设置成功')
    let studentAll = yield select()
    console.log('成功拿到学生数据', studentAll)
    console.log('学生数据将于10s后清空');
    yield delay(10000)
    yield put(createClearStudentAction())
    console.log('学生数据清空完毕')
}
