/* eslint import/no-anonymous-default-export: off, require-yield: off */
// import { call, delay, all } from 'redux-saga/effects'
import { call, delay, fork, put, select, take, takeEvery, all } from '../../utils/rewriteRedux/redux-saga/effects'
// import { cancel } from '../../utils/rewriteRedux/redux-saga/effects/cancel'
// import { createClearStudentAction } from '../action/student'

export default function* () {
    console.log('saga已启动')
    yield all([demo1(), demo2(), demo3()])
    console.log('saga任务执行完毕')
}

function* demo1() {
    yield delay(1000)
    console.log('执行1')
}

function* demo2() {
    yield delay(1000)
    console.log('执行2')
}

function* demo3() {
    yield delay(1000)
    console.log('执行3')    
}
