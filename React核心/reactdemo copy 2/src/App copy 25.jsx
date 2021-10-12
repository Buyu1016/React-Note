import React, { PureComponent, useState, useCallback } from 'react'

export default function App(props) {
    console.log('App运行了')
    const [num, setNum] = useState(0)
    const [val, setVal] = useState(0)

    const onAClick = useCallback(() => {
        setNum(num + 1)
    }, [num])
    
    return (
        <div>
            组件App
            {/* 正常情况下下面的input改变了并不会使得A组件重新渲染, 
                但是由于onClick的函数每次都是一个新的地址, 造成了A每次都会运行
                使用useCallback进行对函数的
                    useCallback(fn, [])
                        fn: 固定引用的函数
                        []: 函数所依赖的数据, 如果依赖的数据发生变化则产生新的函数地址
            */}
            {/* <A value={num} onClick={() => {
                setNum(num + 1)
            }}/> */}
            <A value={num} onClick={onAClick}/>
            <input
                type="number"
                value={val}
                onChange={(e) => {
                    setVal(e.target.value)
                }}
            />
        </div>
    )
}

class A extends PureComponent {
    render() {
        console.log('A运行了')
        return (
            <div>
            {this.props.value}
            <button
                onClick={() => {
                   this. props.onClick && this.props.onClick()
                }}
            >改变</button>
        </div>
        )
    }
}
