import store from './index'
import { createLoginUserAction, createSignUserAction, createUpdateUserAction } from './action/userAction'
import { v1 } from 'uuid'

console.log(store.dispatch)

store.dispatch(createLoginUserAction({
    id: v1(),
    userName: 'CodeGorgeous'
}))

store.dispatch(createUpdateUserAction())
