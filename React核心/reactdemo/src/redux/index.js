import { createStore, applyMiddleware } from 'redux'
import reducer from './reducer/index'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
// import { createLogger } from 'redux-logger'
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



