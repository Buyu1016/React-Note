import { effectTypes, createEffect } from './index'
import { run } from '../run'

export function fork(generatorFn, ...args) {
    return createEffect(effectTypes.FORK, {
        fn: generatorFn,
        args
    })
}

export function runFork(env, value, next) {
    const task = run(env, value.payload.fn, ...value.payload.args)
    next(task)
}
