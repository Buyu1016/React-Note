import { createAction, createActions } from 'redux-actions';
// import { createAction, createActions } from '../../utils/rewriteRedux/redux-actions'

export const SETCOOKIE = Symbol('set-cookie')
export const CLEARCOOKIE = Symbol('Clear-cookie')

export const easyClearCookie = createAction(CLEARCOOKIE)
export const easySetCookie = createAction(SETCOOKIE, payload => payload)
export const actions = createActions({
    EASY_SET_COOKIE: payload => payload,
    EASY_CLEAR_COOKIE: null // {type: EASY_CLEAR_COOKIE}
})

export function createSetCookieAction(payload) {
    return {
        type: SETCOOKIE,
        payload
    }
}

export function createClearCookieAction() {
    return {
        type: CLEARCOOKIE
    }
}


