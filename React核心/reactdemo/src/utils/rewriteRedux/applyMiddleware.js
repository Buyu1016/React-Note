export function applyMiddleware(...rest) {
    return function (createStore) {
        return function (reducers, initValue) {
            const store = createStore(reducers, initValue)
            let dispatch = () => {
                throw new Error('Dispatch is temporarily unavailable')
            }
            const newStore = {
                dispatch: store.dispatch,
                getState: store.getState
            }
            let createDispatchList = []
            for (const iterator of rest) {
                createDispatchList = [iterator(newStore), ...createDispatchList]
            }
            dispatch = store.dispatch
            for (const createDispatch of createDispatchList) {
                dispatch = createDispatch(dispatch)
            }
            return {
                ...store,
                dispatch
            }
        }
    }
}
