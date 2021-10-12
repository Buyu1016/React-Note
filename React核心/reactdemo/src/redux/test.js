import store from './index'
import { createUpdateUserAction } from './action/userAction'
import { v1 } from 'uuid'

store.dispatch(createUpdateUserAction({
    id: v1(),
    userName: 'maomao'
}))
