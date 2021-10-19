/* eslint-disable*/
export default {
    namespace: 'counter',
    state: 0,
    reducers: {
        increase(state, action) {
            return state + 1
        },
        decrease(state, action) {
            return state - 1
        }
    },
    subscriptions: {
        one(obj, fn) {
            console.log('执行', obj, fn)
        }
    }
}