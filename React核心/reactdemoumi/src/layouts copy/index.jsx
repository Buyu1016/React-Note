import React from 'react'
import { Link } from 'umi'

export default function Layout(props) {
    if (props.location.pathname.includes('/login')) {
        return (
            <>{props.children}</>
        )
    }
    return (
        <div>
            <div>
                <span>导航栏</span>
                |
                <span><Link to={'/'}>首页</Link></span>
                |
                <span><Link to={'/login'}>登录</Link></span>
                |
                <span><Link to={'/user'}>个人中心</Link></span>
                |
                <span><Link to={'/user/space'}>个人空间</Link></span>
            </div>
            {props.children}
            <div><h1>页脚</h1></div>
        </div>
    )
}
