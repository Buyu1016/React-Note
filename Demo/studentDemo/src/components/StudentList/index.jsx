import React from 'react'

export default function StudentList(props) {
    const list = props.studentList.map(item => {
        return <li key={item.id}>
            <span>{item.name}</span> | 
            <span>{item.sex ? '女' : '男'}</span> | 
            <span>{item.phone}</span>
        </li>
    })
    return (
        <ul>
            {list}
        </ul>
    )
}
