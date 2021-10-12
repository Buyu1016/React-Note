import React, { useState } from 'react'

export default function UseStateDemo(props) {
    // 会返回一个数组, 数组[0]存储的是数据, 数组[1]存储的是函数, 函数用于改变值
    const arr = useState(18)
    // 简便写法, 配合es6的解构语法
    // const [age, setAge] = useState(18)

    const [ifDisplay, setIfDisplay] = useState(true)

    return (
        <div>
            组件UseStateDemo
            <h1 style={{
                display: ifDisplay ? 'block' : 'none'
            }}>
                <button onClick={() => {
                    arr[1](arr[0] - 1)
                }}>-</button>
                {arr[0]}
                <button onClick={() => {
                    // 函数内多次设置State则需要第一个参数为函数
                    arr[1](cur => cur + 1)
                    arr[1](cur => cur + 1)
                }}>+</button>
            </h1>
            <button onClick={() => {
                setIfDisplay(!ifDisplay)
            }}>切换状态</button>
        </div>
    )
}
