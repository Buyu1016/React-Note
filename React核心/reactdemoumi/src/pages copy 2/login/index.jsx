import React from 'react'
import { Link, history } from 'umi'

export default function Login(props) {
    console.log(props)
    return (
        <div>
            {/* 声明式 */}
            {/* <button><Link to="/user">登录</Link></button> */}
            <button onClick={() => {
                history.push('/user')
            }}>登录</button>
        </div>
    )
}
