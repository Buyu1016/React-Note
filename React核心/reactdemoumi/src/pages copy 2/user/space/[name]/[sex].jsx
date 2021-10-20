import React from 'react'

export default function Demo(props) {
    console.log(props.match.params)
    return (
        <div>
            已匹配
        </div>
    )
}
