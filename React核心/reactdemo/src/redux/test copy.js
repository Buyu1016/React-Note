import store from './index'
import { createGetAllStudentAction, createAddStudentAction, createClearStudentAction, createUpdateStudentAction } from './action/student'
// import { v1 } from 'uuid'

store.dispatch(createGetAllStudentAction())

// TODO 增加学生的fetch请求方法有问题, 暂时进行修复
// store.dispatch(createAddStudentAction({
//     name: '毛毛',
//     sex: 1,
//     sNo: '666666',
//     email: '1787362066@qq.com',
//     birth: 3.14,
//     phone: '1234567890',
//     address: '江苏省苏州市'
// }))

store.dispatch(createUpdateStudentAction())

store.dispatch(createClearStudentAction())
