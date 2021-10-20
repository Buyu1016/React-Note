import React from 'react'

export default function Layout(props) {
    return (
        <div>
            <div>
                <h1>上</h1>
            </div>
            {props.children}
            <div>
                <h1>下</h1>
            </div>
        </div>
    )
}
