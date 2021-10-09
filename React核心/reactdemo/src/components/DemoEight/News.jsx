import React from 'react'
import { Redirect } from 'react-router-dom'
import VueLink from './VueLink'

export default function News(props) {
    return (
        <div>
            <h1>news</h1>
            <nav>
                <VueLink to={{
                    name: 'NewsSearch'
                }}>新闻搜索页</VueLink>
                <VueLink to={{
                    name: 'NewsDetail'
                }}>新闻详情页</VueLink>
                <Redirect to='/news/search'/>
            </nav>
            <div>
                {props.children}
            </div>
        </div>
    )
}
