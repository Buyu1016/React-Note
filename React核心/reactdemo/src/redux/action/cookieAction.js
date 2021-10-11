export const SETCOOKIE = Symbol('set-cookie')
export const CLEARCOOKIE = Symbol('Clear-cookie')

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


