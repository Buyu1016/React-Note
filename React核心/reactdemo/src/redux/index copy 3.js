// import { createStore } from 'redux'
import { createStore } from '../utils/rewriteRedux/createStore'
import reducer from './reducer/index'
import { createLoginUserAction, createSignUserAction } from './action/userAction'
// import { createSetCookieAction, createClearCookieAction } from './action/cookieAction'

const store = createStore(reducer) // 一次user一次cookie

// console.log(store, reducer)

store.subscribe(() => {
    console.log('监听器1')
})

const unSub = store.subscribe(() => {
    console.log('监听器2')
})


store.dispatch(createLoginUserAction({
    userName: 'maomao',
    id: 1
}))

unSub()

store.dispatch(createSignUserAction())

// console.log(a.__proto__ === Object.prototype)

