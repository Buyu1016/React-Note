import { v4 } from 'uuid'

export function combineReducers(reducers) {
    // 判断是否为对象
    if (Object.prototype.toString.call(reducers) !== '[object Object]') {
        throw new Error(`Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.`)
    } else {
        // 是否为平面对象
        if (reducers.__proto__ !== Object.prototype) {
            throw new Error('Action should be a flat object')
        } else {
            // 验证reducer是否会为undefined
            for (const key in reducers) {
                if (reducers[key](undefined, {type: `@@redux/INIT${v4()}`}) === 'undefined') {
                    throw new Error(`Returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.`)
                }
                if (reducers[key](undefined, {type: `@@redux/PROBE_UNKNOWN_ACTION${v4()}`}) === 'undefined') {
                    throw new Error(`Returned fixed value during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of fixed value.`)
                }
            }
        }
    }
    return function (state = {}, action) {
        const newState = {}
        for (const key in reducers) {
            newState[key] = reducers[key](state[key], action)
        }
        return newState
    }
}