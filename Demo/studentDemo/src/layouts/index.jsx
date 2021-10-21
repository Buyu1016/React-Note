import React from 'react'
import style from './index.css'
import { NavLink } from 'umi'

export default function Layout(props) {
    return (
        <div>
            <div className={style.header}>导航栏</div>
            <div className={style.box}>
                <div className={style.side}>
                    <h1>学生管理</h1>
                    <div className={style['side-span']}><NavLink to="/list">学生列表</NavLink></div>
                    <div className={style['side-span']}><NavLink to="/search">学生查询</NavLink></div>
                    <div className={style['side-span']}><NavLink to="/add">添加学生</NavLink></div>
                    <div className={style['side-span']}><NavLink to="/delete">删除学生</NavLink></div>
                </div>
                <div className={style.main}>{props.children}</div>
            </div>
        </div>
    )
}
