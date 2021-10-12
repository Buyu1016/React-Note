/* eslint import/no-anonymous-default-export: off*/
import { LOGINUSER, SIGNUSER } from '../action/userAction'



const initialState = {
    userName: '',
    id: '',
    isLogin: false
}


// undefined 'set-login'
export default (state = initialState, { type, payload }) => {
    switch (type) {
        case LOGINUSER:
            return { ...state, ...payload, isLogin: true }
        case SIGNUSER:
            return {
                ...state,
                userName: '',
                id: '',
                isLogin: false
            }
        default:
            return state
    }
}
