import { effectTypes, createEffect } from './index'
import { runProc } from '../run'

export function all(generatorList = []) {
    return createEffect(effectTypes.ALL, {
        fns: generatorList
    })
}

export function runAll(env, value, next) {
    const taskList = value.payload.fns.map(fn => runProc(env, fn))
    const promises = taskList.map(item => item.toPromise())
    Promise.all(promises).then(r => next())
}
