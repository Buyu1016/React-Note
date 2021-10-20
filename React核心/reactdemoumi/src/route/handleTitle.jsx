import React from 'react'
import { Redirect } from 'umi'

export default function handleTitle(props) {
    if (!props.match.params.name) {
        alert('请先进行登录')
        return <Redirect to="/login" />
    } else {
        return (
            <>{props.children}</>
        )
    }
}
