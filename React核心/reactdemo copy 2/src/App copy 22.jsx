import React from 'react'
import { useAllStudent } from './Hooks/useAllStudent'

export default function App(Props) {
    const stus = useAllStudent()
    console.log(stus);
    return (
        <div>
            组件App
        </div>
    )
}
