import { getAllStudent, addStudent } from '../../utils/tools'

export const STUDENTSET = Symbol('student-set')
export const STUDENTADD = Symbol('student-add')
export const STUDENTCLEAR = Symbol('student-clear')
export const STUDENTUPDATE = Symbol('student-update')
export const FETCHSTUDENT = Symbol('student-fetch')

// 使用redux-thunk的方式
// export const createGetAllStudentAction = () => {
//     return (dispatch) => {
//         getAllStudent().then(resp => {
//             dispatch({
//                 type: STUDENTSET,
//                 payload: resp.data
//             })
//         })
//     }
// }

// 使用redux-promise的第一种方式
// export const createGetAllStudent = () => {
//     return new Promise((resolve, reject) => {
//         getAllStudent().then(resp => {
//             resolve({
//                 type: STUDENTSET,
//                 payload: resp.data
//             })
//         })
//     })
// }

// 使用redux-promise的第二种方式
// 该种方式所返回的action.type不能是一个Symbol
// export const createGetAllStudent = (condition) => {
//     return {
//         type: STUDENTSET,
//         payload: getAllStudent(condition).then(resp => {
//             return resp.data
//         })
//     }
// }

// export const createAddStudentAction = (payload) => {
//     return (dispatch) => {
//         addStudent(payload.sNo, payload.name, payload.sex, payload.birth, payload.phone, payload.email, payload.address).then(resp => {
//             getAllStudent().then(resp => {
//                 dispatch({
//                     type: STUDENTUPDATE,
//                     payload: resp.data
//                 })
//             })
//         })
//     }
// }

export const createClearStudentAction = () => {
    return {
        type: STUDENTCLEAR
    }
}

export const createUpdateStudentAction = () => {
    return (dispatch) => {
        getAllStudent().then(resp => {
            dispatch({
                type: STUDENTUPDATE,
                payload: resp.data
            })
        })
    }
}

export const createFetchStudentAction = () => {
    return {
        type: FETCHSTUDENT
    }
}

export const createGetAllStudent = (payload = []) => {
    return {
        type: STUDENTSET,
        payload
    }
}
