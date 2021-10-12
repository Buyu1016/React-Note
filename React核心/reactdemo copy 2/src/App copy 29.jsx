import React, { useRef, useImperativeHandle } from 'react'

const NewA = React.forwardRef(A)

export default function App() {
    const newARef = useRef()

    return (
        <div>
            <NewA ref={newARef}/>
            <button
                onClick={() => {
                    console.log(newARef, newARef.current)
                }}
            >Print</button>
        </div>
    )
}

function A(props, ref) {
    // 第一个参数为填写ref
    // 第二个值为函数,返回值会作为ref.current存储
    // 第三个参数为[], 是依赖项
    useImperativeHandle(ref, () => {
        return 'Hello A'
    })
    return (
        <div>
            Hello A
        </div>
    )
}
