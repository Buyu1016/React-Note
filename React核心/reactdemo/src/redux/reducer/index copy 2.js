// import student from './student'
import { reducers } from '../action/student'
import cookie from './cookie'
import { combineReducers } from 'redux'

// redux提供的reducer合并方法
export default combineReducers({
    student: reducers,
    cookie
})
