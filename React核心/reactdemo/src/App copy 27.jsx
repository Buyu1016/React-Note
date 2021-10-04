import React, { useRef, useState, useEffect } from 'react'

export default function App() {
    const [h, setH]  = useState(0)
    const [m, setM]  = useState(0)
    const [n, setN] = useState(0)
    
    const timer = useRef()
    useEffect(() => {
        if (n === 60) {
            setN(0)
            setM(m + 1)
        }
        if (n === 60) {
            setM(0)
            setH(h + 1)
        }
        
        timer.current = setTimeout(() => {
            setN(n + 1)
        }, 1000)
        return (() => {
            clearTimeout(timer.current)
        })
    }, [n])
    return (
        <div>
            <h1>{h}:{m}:{n}</h1>
        </div>
    )
}
