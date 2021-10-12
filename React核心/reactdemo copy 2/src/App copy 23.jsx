import React, { useReducer } from 'react'
// import { useReducer } from './Hooks/useReducer'

export default function App(props) {
    // 官方提供有useReducer, 其写法如下:
    // 官方提供有第三个参数, 但第三个参数为一个函数, 函数的第一个参数为useReducer的初始值, 函数的返回值作为初始值使用
    const [n, dispatch] = useReducer(reducer, 5, (val) => {
        // 主要是用于做一些复杂的计算操作使用
        return val + 10
    })
    // 自己重写的useReducer
    // const [n, dispatch] = useReducer(reducer, 5)
    return (
        <div>
            <button
                onClick={() => {
                    dispatch('decrease')
                }}
            >-</button>
            {n}
            <button
                onClick={() => {
                    dispatch('increase')
                }}
            >+</button>
        </div>
    )
}

function reducer(n, action) {
    switch(action) {
        case 'decrease':
            return n - 1
        case 'increase':
            return n + 1
        default:
            return n
    }
}
