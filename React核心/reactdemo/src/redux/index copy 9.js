import { createStore, applyMiddleware } from 'redux'
import reducer from './reducer/index'
import logger from 'redux-logger'
import promiseMiddleware from 'redux-promise'
// import promiseMiddleware from '../utils/rewriteRedux/redux-promise'
// import createSagaMiddleware from 'redux-saga'
import createSagaMiddleware from '../utils/rewriteRedux/redux-saga'
import rootSagaTask from './saga'

const SagaMiddleware = createSagaMiddleware()

export default createStore(reducer, applyMiddleware(SagaMiddleware, promiseMiddleware, logger))

// saga任务启动
const task = SagaMiddleware.run(rootSagaTask)

// console.log(task)
