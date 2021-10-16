import { effectTypes, createEffect } from './index'

export function select(fn) {
    return createEffect(effectTypes.SELECT, {
        fn: fn
    })
}

export function runSelect(env, value, next) {
    let result = env.store.getState()
    if (Object.prototype.toString.call(value.payload.fn) === '[object Function]') {
        result = value.payload.fn(result)
    }
    next(result)
}
