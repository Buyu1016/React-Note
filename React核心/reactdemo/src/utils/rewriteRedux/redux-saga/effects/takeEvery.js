import { effectTypes, createEffect } from './index'
import { runFork } from './fork'

export function takeEvery(actionType, fn, ...args) {
    return createEffect(effectTypes.TAKEEVERY, {
        actionType,
        fn,
        args
    })
}

export function runTakeEvery(env, value, next) {
    env.channel.take(value.payload.actionType, () => {
        runFork(env, value, next)
    })
    next()
}
