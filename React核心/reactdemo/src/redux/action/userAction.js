import { v4 } from 'uuid'
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
    return (dispatch, getState, extra) => {
        // 模拟异步
        setTimeout(() => {
            if (Math.random() > 0.5) {
                console.log('登录成功并更新了用户数据')
                dispatch(createLoginUserAction({
                    id: v4(),
                    userName: 'maomao'
                }))
            } else {
                console.log('登录失败, 退出登录')
                dispatch(createSignUserAction())
            }
        }, 2000)
    }
}
