import React, { Component } from 'react'

export default class StudentTable extends Component {
    render() {
        return (
            <li>
                |<span>{this.props.student.name}</span> |
                <span>{this.props.student.phone}</span> |
                <span>{this.props.student.address}</span> |
                <span>{this.props.student.email}</span> |
            </li>
        )
    }
}
