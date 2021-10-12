import React, { useState, useEffect, useDebugValue } from 'react'

export default function App() {
    const [my, setMy] = useState('CodeGorgeous')
    useEffect(() => {},[])
    useTest()
    return (
        <div>
            
        </div>
    )
}

function useTest() {
    const [name, setName] = useState('maomao')
    const [age, setAge] = useState(15)
    useDebugValue('MyConfidante')
}
