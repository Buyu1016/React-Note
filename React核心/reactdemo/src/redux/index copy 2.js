import { createStore } from 'redux'
import reducer from './reducer/index'
import { createLoginUserAction, createSignUserAction } from './action/userAction'
import { createSetCookieAction, createClearCookieAction } from './action/cookieAction'

const store = createStore(reducer) // 一次user一次cookie

store.dispatch(createLoginUserAction({
    id: 1,
    userName: 'CodeGorgeous'
})) // 一次user一次cookie

store.dispatch(createSetCookieAction({
    key: 'cookie',
    value: '好耶!'
})) // 一次user一次cookie

console.log(store.getState())

store.dispatch(createSignUserAction())

store.dispatch(createClearCookieAction())

console.log(store.getState())
