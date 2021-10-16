export const effectTypes = {
    CALL: 'CALL',
    DELAy: 'DELAY',
    PUT: 'PUT',
    SELECT: 'SELECT',
    TASK: 'TASK',
    FORK: 'FORK',
    CANCEL: 'CANCEL',
    TAKEEVERY: 'TAKEEVERY',
    ALL: 'ALL'
}

export function createEffect(type, payload) {
    // 验证type是否是一个正确的类型
    if (effectTypes[type]) {
        return {
            '@@redux-saga/IO': true,
            payload,
            type,
        }
    } else {
        throw new Error('Type is an invalid type')
    }
}

export { call } from './call'
export { delay } from './delay'
export { put } from './put'
export { select } from './select'
export { take } from './take'
export { fork } from './fork'
export { cancel } from './cancel'
export { takeEvery } from './takeEvery'
export { all } from './all'