import { effectTypes, createEffect } from './index'

export function take(actionType) {
    return createEffect(effectTypes.TASK, {
        actionType,
    })
}

export function runTake(env, value, next) {
    env.channel.take(value.payload.actionType, (action) => {
        next(action)
    })
}
