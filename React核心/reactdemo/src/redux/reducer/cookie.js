/* eslint import/no-anonymous-default-export: off*/
import { SETCOOKIE, CLEARCOOKIE } from '../action/cookieAction'

const initialState = []

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case SETCOOKIE:
            return [...state, payload]
        case CLEARCOOKIE:
            return []
        default:
            return state
    }
}
