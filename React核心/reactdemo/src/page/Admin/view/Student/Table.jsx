import React from 'react'
import PropTypes from 'prop-types'
import './table.css'

export default function StudentTable(props) {
    
    const list = props.list.map((item, index) => {
        return (
            <tr key={index}>
                <td>{item.name}</td>
                <td>{item.sex === 1 ? '女' : '男'}</td>
                <td>{item.phone}</td>
                <td>{item.address}</td>
            </tr>
        )
    })

    return (
        <table className="table-container">
            <thead>
                <tr>
                    <th>姓名</th>
                    <th>性别</th>
                    <th>手机号</th>
                    <th>地址</th>
                </tr>
            </thead>
            <tbody>
                {list}
            </tbody>
        </table>
    )
}

StudentTable.defaultProps = {
    list: []
}

StudentTable.propTypes = {
    list: PropTypes.arrayOf(PropTypes.object)
}
