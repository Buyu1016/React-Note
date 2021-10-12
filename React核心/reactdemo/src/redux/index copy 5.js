// import { createStore } from 'redux'
import { createStore } from '../utils/rewriteRedux/createStore'
// import { applyMiddleware } from 'redux'
import { applyMiddleware } from '../utils/rewriteRedux/applyMiddleware'
// import { bindActionCreators } from '../utils/rewriteRedux/bindActionCreators'
import reducer from './reducer/index'
import { createLoginUserAction, createSignUserAction } from './action/userAction'
// import { createSetCookieAction, createClearCookieAction } from './action/cookieAction'

// 增强dispatch
// 中间件大概原理就是这样
// const dispatch = store.dispatch
// store.dispatch = function (action) {
//     console.log('旧数据', store.getState())
//     dispatch(action)   
//     console.log('新数据', store.getState())
// }

// 中间件书写标准格式
function getStoreMessage(store) {
    console.log('getStoreMessage中间件运行', store)
    
    // 该dispatch是下一个中间件所传过来的
    return function (dispatch) {
        return function (action) {
            console.log('中间件OldState信息:', store.getState())
            console.log('中间件Action信息:', action)
            dispatch(action)
            console.log('中间件NewState信息:', store.getState())
        }
    }
}

// function middleware2(store) {
//     console.log('中间件2')
//     return function (dispatch) {
//         return function (action) {
//             console.log('中间件2的dispatch触发')
//             dispatch(action)
//         }
//     }
// }

// 中间件简写版本
const middleware2 = (store) => {
    console.log('中间件2')
    return (dispatch) => {
        return (action) => {
            console.log('中间件2的dispatch触发')
            dispatch(action)
        }
    }
}

// 如果第二个参数是一个函数则认为这个函数是一个中间件
// 如果有第二个参数则第三个参数是填写中间件
const store = createStore(reducer, applyMiddleware(getStoreMessage, middleware2))

// 第二种使用redux中间件方式
// 使用较少, 更底层
// const newCreateStore =  applyMiddleware(getStoreMessage, middleware2)

// const store2 = newCreateStore(createStore)(reducer)

// store.subscribe((oldValue, newValue, action) => {
//     // console.log('监听器触发', oldValue, newValue, action)
// })

store.dispatch(createLoginUserAction({
    userName: 'maomao',
    id: 1
}))

// store2.subscribe((oldValue, newValue, action) => {
//     // console.log('监听器触发', oldValue, newValue, action)
// })

// store2.dispatch(createLoginUserAction({
//     userName: 'maomao',
//     id: 1
// }))

// console.log(store.getState());

