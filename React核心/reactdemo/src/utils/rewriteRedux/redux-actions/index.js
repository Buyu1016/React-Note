import { getStandard } from './tools'

export function createAction(actionType, payload) {
    return function (...args) {
        if (payload) {
            return {
                type: actionType,
                payload: payload(...args)
            }
        } else {
            return {
                type: actionType
            }
        }
    }
}

export function createActions(actions) {
    const newActions = {}
    for (const key in actions) {
        const name = getStandard(key)
        newActions[name] = function actionCreator(...args) {
            if (Object.prototype.toString.call(actions[key]) === '[object Function]') {
                return {
                    type: key,
                    payload: actions[key](...args)
                }
            } else {
                return {
                    type: key
                }
            }
        }
    }

    return newActions
}

export function handleAction(action, fn, initValue) {
    let actionType = action
    if (Object.prototype.toString.call(action) === '[object Function]') {
        actionType = action().type
    }
    
    return function (state = initValue, action) {
        if (action.type === actionType) {
            return fn(state, action)
        } else {
            return state
        }
    }
}

export function handleActions(reducers, initValue) {
    return function(state = initValue, action) {
        for (const key in reducers) {
            let actionType = key
            if (Object.prototype.toString.call(key) === '[object Function]') {
                actionType = key().type
            }
            if (action.type === actionType) {
                return reducers[key](state, action)
            }
        }
        return state
    }
}

export function combineActions() {

}

