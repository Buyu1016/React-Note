import store from './index'
// import { createGetAllStudent, createClearStudentAction, createFetchStudentAction } from './action/student'

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
