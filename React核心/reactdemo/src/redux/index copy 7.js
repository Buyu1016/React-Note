import { createStore } from 'redux'
// import { applyMiddleware } from 'redux'
import { applyMiddleware } from '../utils/rewriteRedux/applyMiddleware'
import reducer from './reducer/index'
import logger from 'redux-logger'
// import thunk from 'redux-thunk'
import thunk from '../utils/rewriteRedux/redux-thunk'

export default createStore(reducer, applyMiddleware(thunk, logger))
