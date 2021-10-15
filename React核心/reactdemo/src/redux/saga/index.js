/* eslint import/no-anonymous-default-export: off, require-yield: off */

import { call, delay } from '../../utils/rewriteRedux/redux-saga/effects'

export default function* () {
    let result
    console.log('saga任务已开启')
    result = yield call(['null', demo1], 'mao')
    console.log(result)
    yield delay(2000)
    result = yield 2
    console.log(result)
    result = yield 3
    console.log(result)
}

async function demo1 (val) {
    return val
}
