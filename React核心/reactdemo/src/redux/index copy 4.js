// import { bindActionCreators } from 'redux'
import { createStore } from '../utils/rewriteRedux/createStore'
import { bindActionCreators } from '../utils/rewriteRedux/bindActionCreators'
import reducer from './reducer/index'
import { createLoginUserAction, createSignUserAction } from './action/userAction'
// import { createSetCookieAction, createClearCookieAction } from './action/cookieAction'

const store = createStore(reducer) // 一次user一次cookie

const userAction = {
    loginUser: createLoginUserAction,
    signUser: createSignUserAction
}
// redux原生
// const userActions = bindActionCreators(userAction, store.dispatch)
// 重写后
const userActions = bindActionCreators(userAction, store.dispatch)

// console.log(userActions)

userActions.loginUser({
    userName: 'maomao',
    id: 1
})

console.log(store.getState());

