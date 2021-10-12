export const LOGINUSER = Symbol('login-user');
export const SIGNUSER = Symbol('sign-user');

export function createLoginUserAction(payload) {
    return {
        type: LOGINUSER,
        payload        
    }
}

export function createSignUserAction() {
    return {
        type: SIGNUSER
    }
}

export const createUpdateUserAction = (payload) => {
    return {
        type: LOGINUSER,
        payload
    }
}
