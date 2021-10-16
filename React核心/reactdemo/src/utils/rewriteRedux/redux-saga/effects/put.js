import { effectTypes, createEffect } from './index'

export function put(action) {
    return createEffect(effectTypes.PUT, {
        action
    })
}

export function runPut(env, value, next) {
    const result = env.store.dispatch(value.payload.action)
    next(result)
}
