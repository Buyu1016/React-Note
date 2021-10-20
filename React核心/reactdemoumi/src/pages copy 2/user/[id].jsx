import React from 'react'

export default function Id(props) {
    return (
        <div>
            Id空间
            <h1>ID: {props.match.params.id}</h1>
        </div>
    )
}
