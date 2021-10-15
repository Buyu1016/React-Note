import { effectTypes } from './index'
import { runCall } from './index'

export default function runEffect(store, value, next) {
    switch (value.type) {
        case effectTypes.CALL:
            runCall(store, value, next)
            break;
    
        default:
            throw new Error('The instruction was not found')
    }
}