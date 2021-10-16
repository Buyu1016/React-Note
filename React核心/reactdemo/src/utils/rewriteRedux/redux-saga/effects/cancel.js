import { effectTypes, createEffect } from './index'

export function cancel(task) {
    return createEffect(effectTypes.CANCEL, {
        task,
    })
}

export function runCancel(env, value, next) {
    value.payload.task.cancel()
    next()
}
