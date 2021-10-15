import run from './run'

export default function createSagaMiddleware () {
    return function sagaMiddleware (store) {
        // 
        sagaMiddleware.run = run.bind(null, store)
        return  dispatch => {
            return  action => {
                return dispatch(action)
            }
        }
    }
}
