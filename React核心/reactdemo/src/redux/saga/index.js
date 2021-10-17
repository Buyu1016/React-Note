/* eslint import/no-anonymous-default-export: off, require-yield: off */
import { call, put, take } from 'redux-saga/effects'
import { actions } from '../action/student'
import { getStudent } from '../../utils/tools'

export default function* () {
    console.log('saga任务已启动')
    while (true) {
        let result;
        result = yield take(actions.fetchSearchStudent().type)
        console.log('开始请求数据')
        result = yield call(getStudent, result.payload.sex, result.payload.word)
        console.log('开始设置数据', result.data.datas)
        yield put(actions.searchStudent(result.data.datas))
        console.log('此次监听完毕')
    }
}

