import { createStore, applyMiddleware } from 'redux'
import reducer from './reducer/index'
import logger from 'redux-logger'
// import promiseMiddleware from 'redux-promise'
import promiseMiddleware from '../utils/rewriteRedux/redux-promise'

export default createStore(reducer, applyMiddleware(promiseMiddleware, logger))
