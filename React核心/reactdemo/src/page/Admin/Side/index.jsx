import React from 'react'
import './side.css'

export default function Side(props) {
    return (
        <ul className="side-container">
            <li
                onClick={() => {
                    props.history.push('/')
                }}
            >主页</li>
            <li
                onClick={() => {
                    props.history.push('/student/list')
                }}
            >学生列表</li>
            <li
                onClick={() => {
                    props.history.push('/student/add')
                }}
            >添加学生</li>
            <li
                onClick={() => {
                    props.history.push('/student/search')
                }}
            >查询学生</li>
            <li
                onClick={() => {
                    props.history.push('/curriculum/list')
                }}
            >课程列表</li>
            <li
                onClick={() => {
                    props.history.push('/curriculum/add')
                }}
            >添加课程</li>
        </ul>
    )
}
