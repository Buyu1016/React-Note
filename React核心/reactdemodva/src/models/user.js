/* eslint-disable */
export default {
    namespace: 'user',
    state: {
        userName: '',
        userPassword: '',
        isLogin: false
    },
    reducers: {
        signIn(state, action) {
            return {
                ...action.payload,
                isLogin: true
            }
        },
        signOut(state, action) {
            return {
                userName: '',
                userPassword: '',
                isLogin: false
            }
        }
    },
    effects: {
        *asyncSignIn(action, obj) {
            console.log('异步触发, 将于2s后登入')
            yield obj.call(delay, 2000)
            yield obj.put({type: 'signIn', payload: action.payload})
            console.log('登入成功')
        },
        *asyncSignOut(action, obj) {
            console.log('异步触发, 将于2s后登出')
            yield obj.call(delay, 2000)
            yield obj.put({type: 'signOut'})
            console.log('登出成功')
        }
    }
}

function delay(delayTimer = 0) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, delayTimer)
    })
} 
