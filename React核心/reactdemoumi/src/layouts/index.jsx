import React from 'react'
import { Link } from 'umi'

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
                <span><Link to={'/'}>首页</Link></span>
                |
                <span><Link to={'/welcome'}>欢迎光临</Link></span>
                |
                <span><Link to={'/login'}>登录</Link></span>
                |
                <span><Link to={'/user'}>User</Link></span>
            </div>
            {props.children}
        </div>
    )
}
