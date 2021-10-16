/* eslint import/no-anonymous-default-export: off*/
// import { SETCOOKIE, CLEARCOOKIE } from '../action/cookieAction'
// import { handleAction, handleActions } from 'redux-actions'
import { handleAction, handleActions } from '../../utils/rewriteRedux/redux-actions'
import { actions } from '../action/cookieAction'

const initialState = []

// (state = initialState, { type, payload }) => {
//     switch (type) {
//         case SETCOOKIE:
//             return [...state, payload]
//         case CLEARCOOKIE:
//             return []
//         default:
//             return state
//     }
// }

// const reducer = handleAction(actions.easySetCookie/* 也可以是一个字符串 */, (state, action) => {
//     return [...state, action.payload]
// }, [])

const reducer = handleActions({
    [actions.easySetCookie]: (state, action) => {return [...state, action.payload]},
    [actions.easyClearCookie]: (state, action) => {return []}
}, [])


export default reducer