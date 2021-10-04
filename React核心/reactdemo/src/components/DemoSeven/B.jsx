import React, { useContext } from 'react'
import context from './context'

export default function B() {
    const confidante = useContext(context)
    console.log(confidante)
    // 旧版本写法:
    // return (
    //     <context.Consumer>
    //         {(value) => {
    //             return (
    //                 <>
    //                     <h1>name: {value.name}</h1>
    //                     <h1>age: {value.age}</h1>
    //                 </>
    //             )
    //         }}
    //     </context.Consumer>
    // )

    // 使用useContext之后的写法
    return (
        <>
            <h1>name: {confidante.name}</h1>
            <h1>age: {confidante.age}</h1>
        </>
    )
}
