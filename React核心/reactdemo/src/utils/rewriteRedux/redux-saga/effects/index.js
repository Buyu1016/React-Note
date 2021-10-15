export const effectTypes = {
    CALL: 'CALL',
    DELAy: 'DELAY'
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

export { call, runCall } from './call'
export { delay } from './delay'