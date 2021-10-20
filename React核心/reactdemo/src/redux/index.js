import { createStore, applyMiddleware } from 'redux'
import reducer from './reducer/index'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import rootSagaTask from './saga'
import { composeWithDevTools } from "redux-devtools-extension"
import { routerMiddleware } from "connected-react-router"
import history from './history'

const routerMid = routerMiddleware(history)
const SagaMiddleware = createSagaMiddleware()

export default createStore(reducer, 
    composeWithDevTools(applyMiddleware(routerMid, SagaMiddleware, logger))
)

SagaMiddleware.run(rootSagaTask)
