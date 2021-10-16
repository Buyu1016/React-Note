import { effectTypes } from './index'
import { runCall } from './call'
import { runPut } from './put'
import { runSelect } from './select'
import { runTake } from './take'
import { runFork } from './fork'
import { runCancel } from './cancel'
import { runTakeEvery } from './takeEvery'
import { runAll } from './all'

export default function runEffect(env, value, next) {
    switch (value.type) {
        case effectTypes.CALL:
            return runCall(env, value, next)
        case effectTypes.PUT:
            return runPut(env, value, next)
        case effectTypes.SELECT:
            return runSelect(env, value, next)
        case effectTypes.TASK:
            return runTake(env, value, next)
        case effectTypes.FORK:
            return runFork(env, value, next)
        case effectTypes.CANCEL:
            return runCancel(env, value, next)
        case effectTypes.TAKEEVERY:
            return runTakeEvery(env, value, next)
        case effectTypes.ALL:
            return runAll(env, value, next)
        default:
            throw new Error('The instruction was not found')
    }
}