import React from 'react'
import { Link } from 'react-router-dom'
import searchPath from '../../utils/searchPath'

export default function VueLink({to, children, ...rest}) {
    
    if (typeof to !== 'string' && to.name) {
        // 根据name找到路由配置文件中响应的path路径
        to.name = searchPath(to.name)
        if (!to.name) {
            throw new Error(`No path matching route ${to.name} was found`)
        }
    }
    return (
        <Link to={to.name} {...rest}>{children}</Link>
    )
}
