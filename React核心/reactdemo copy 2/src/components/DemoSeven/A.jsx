import React from 'react'
import context from './context'
import B from './B'

export default function A() {
    return (
        <div>
            <context.Provider value={{
                name: 'maomao',
                age: 15
            }}>
                Hello A
                <B />
            </context.Provider>
        </div>
    )
}
