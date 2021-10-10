import { createStore } from 'redux'
/**
 * 
 * @param {*} state 数据仓库的数据
 * @param {*} action 描述操作行为
 */
/*
    行为需要自行规定:
        例如: add 增加  reduce 减少
 */
function reducer(state, action) {
    switch (action.type) {
        case 'add':
            return state + 1
        case 'reduce':
            return state - 1
        case 'set':
            return action.payload
        default:
            return state
    }
}

// 通过createStore创建仓库
const store = createStore(reducer, 1)

console.log(store)

const action = {
    type: 'add'
}

// 拿到仓库数据
console.log(store.getState()) // 1

// 执行操作
store.dispatch(action)

// 拿到变化后的仓库数据
console.log(store.getState()) // 2

// 通过函数创建action
function createActionAdd(payload = '') {
    return {
        type: 'add',
        payload
    }
}

store.dispatch(createActionAdd())

console.log(store.getState()) // 3

function createActionSet(payload) {
    return {
        type: 'set',
        payload
    }
}

store.dispatch(createActionSet(5))

console.log(store.getState()) // 5

// 自动分发
function automaticDispatch(action, dispatch) {
    dispatch(action)
}

automaticDispatch(createActionSet(10), store.dispatch)

console.log(store.getState()) // 10
