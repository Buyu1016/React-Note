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
    }
}