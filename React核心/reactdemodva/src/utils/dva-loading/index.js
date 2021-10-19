/* eslint-disable */
export default function createLoading (options = {}) {
    options.namespace = options.namespace || 'loading'
    let initValue = {
        global: false,
        models: {},
        effects: {}
    }
    const START = '@@doomfist-start'
    const STOP = '@@doomfist-stop'
    return {
        extraReducers: {
            /**
             * 
             * @param {Object} state 
             * @param {Object} action {type: '@@doomfist-start', payload: {namespace: 'user', actionType: 'asyncSignIn'}}
             * @returns 
             */
            [options.namespace]: (state = initValue, action) => {
                const { namespace, actionType } = action.payload || {}
                switch (action.type) {
                    case START:
                        return {
                            global: true,
                            models: {
                                ...state.models,
                                [namespace]: true
                            },
                            effects: {
                                ...state.effects,
                                [actionType]: true
                            }
                        }
                    case STOP:
                        const models = {
                            ...state.models,
                            [namespace]: false
                        }
                        return {
                            global: Object.keys(models).some(key => models[key]),
                            models,
                            effects: {
                                ...state.effects,
                                [actionType]: false
                            }
                        }
                    default:
                        return state
                }

            }
        },
        onEffect(old, saga, model, actionType) {
            return function* (action) {
                yield saga.put({type: START, payload: {
                    namespace: model.namespace,
                    actionType
                }})
                yield old(action)
                yield saga.put({type: STOP, payload: {
                    namespace: model.namespace,
                    actionType
                }})
            }
        }
    }
}