/* eslint import/no-anonymous-default-export: off*/

// export function reducer(state, action) {
//     console.log('执行', state, action);
//     switch (action.type) {
//         case 'add':
//             return state + 1
//         case 'reduce':
//             return state - 1
//         default:
//             return state
//     }
// }

import user from './user'
import cookie from './cookie'
import { combineReducers } from 'redux'
// import { combineReducers } from '../../utils/rewriteRedux/combineReducers'

// 自行封装的简易版reducer合并
// const initialState = {}

// export default (state = initialState, action) => {
//     const newState = {
//         user: user(state.user, action),
//         cookie: cookie(state.cookie, action)
//     }
//     return newState
// }

// redux提供的reducer合并方法
export default combineReducers({
    user,
    cookie
})
