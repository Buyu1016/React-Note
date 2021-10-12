import { useState } from 'react'

/**
 * 数据管理
 * @param { Function } reducer 数据操作函数
 * @param { any } initial 数据初始值
 * @param { Function } initFun 初始值函数
 * @returns { Object }
 */
export function useReducer(reducer, initial, initFun) {
    const [n, setN] = useState(initFun ? initFun(initial) : initial)
    function dispatch(action) {
        const newN = reducer(n, action)
        console.log(`日志记录: 操作类型: ${action}, 数据变化:${n}->${newN}`)
        setN(newN)
    }
    return [n, dispatch]
}
