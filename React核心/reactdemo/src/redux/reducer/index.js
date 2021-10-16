import student from './student'
import cookie from './cookie'
import { combineReducers } from 'redux'

// redux提供的reducer合并方法
export default combineReducers({
    student,
    cookie
})
