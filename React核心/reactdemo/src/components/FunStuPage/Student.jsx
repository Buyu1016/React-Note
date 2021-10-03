import React from 'react'

export default function Student(props) {
    return (
        <li>
            <span>{props.student.id}</span>
            <span>{props.student.name}</span>
            <span>{props.student.birth}</span>
            <span>{props.student.address}</span>
            <span>{props.student.sex ? '女' : '男'}</span>
            <span>{props.student.phone}</span>
            <span>{props.student.appkey}</span>
        </li>
    )
}
