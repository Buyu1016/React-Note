import store from './index'
// import { createGetAllStudent, createClearStudentAction, createFetchStudentAction } from './action/student'
import { easyClearCookie, easySetCookie, actions } from './action/cookieAction'

// store.dispatch(createGetAllStudent())
// store.dispatch(createGetAllStudent())
// store.dispatch(createClearStudentAction())
// store.dispatch(createGetAllStudent())
// store.dispatch(createGetAllStudent())

// store.dispatch(createFetchStudentAction())

window.start = () => {
    store.dispatch({type: 'start'})
}

window.stop = () => {
    store.dispatch({type: 'stop'})
}

// store.dispatch(easySetCookie({
//     key:'mao',
//     value: 1
// }))

store.dispatch(actions.easyClearCookie())
console.log(actions.easyClearCookie.toString()) // EASY_CLEAR_COOKIE
