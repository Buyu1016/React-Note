import { createStore } from 'redux'
// import { applyMiddleware } from 'redux'
import { applyMiddleware } from '../utils/rewriteRedux/applyMiddleware'
import reducer from './reducer/index'
import logger from 'redux-logger'
// import { createLogger } from 'redux-logger'
// import thunk from 'redux-thunk'
import thunk from '../utils/rewriteRedux/redux-thunk'
// import { createSetCookieAction, createClearCookieAction } from './action/cookieAction'

// logger配置
// const logger = createLogger({
//     // 在数据更新时进行调用
//     predicate: () => {
//         console.log('已调用')
//     },
//     collapsed: (state, action) => {
//         console.log(state, action)
//     }
// })

export default createStore(reducer, applyMiddleware(thunk, logger))



