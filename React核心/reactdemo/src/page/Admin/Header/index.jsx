import React from 'react'
import './header.css'

export default function Header() {
    return (
        <div className={"header-container"}>
            <h2>学生管理系统</h2>
            <div>
                <a href="/login">登录</a>
            </div>
        </div>
    )
}
