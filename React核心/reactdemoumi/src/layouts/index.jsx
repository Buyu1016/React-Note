import React from 'react'
import { NavLink } from 'umi'

export default function Layout(props) {
    for (const url of props.route.routes) {
        if (url.path === props.location.pathname) {
            document.title = url.title || '暂无标题'
        }
    }
    return (
        <div>
            <div>
                <span>导航栏</span>
                |
                <span><NavLink exact to={'/'}>首页</NavLink></span>
                |
                <span><NavLink to={'/welcome'}>欢迎光临</NavLink></span>
                |
                <span><NavLink to={'/login'}>登录</NavLink></span>
                |
                <span><NavLink to={'/user'}>User</NavLink></span>
            </div>
            {props.children}
        </div>
    )
}
