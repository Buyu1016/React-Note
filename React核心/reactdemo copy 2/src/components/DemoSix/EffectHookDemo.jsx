import React, { useEffect, useState } from 'react'

export default function EffectHookDemo() {
    console.log('渲染')
    const [num, setNum] = useState(0)

    useEffect(() => {
        console.log('副作用')
        document.title = num
        // 可以返回一个函数, 返回函数运行时间点是渲染之后, 副作用函数调用之前
        return () => {console.log('清理')}
    })

    return (
        <div>
            {num}
            <button onClick={() => {
                setNum(cur => cur + 1);
            }}>+</button>
        </div>
    )
}
