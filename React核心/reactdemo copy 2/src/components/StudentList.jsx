import React, { Component } from 'react'

import StudentTable from './StudentTable.jsx'

export default class StudentList extends Component {
    render() {
        const newStudentList = this.props.stuList.map((item, index) => <StudentTable student={item} key={index}/>)
        return (
            <div>
                {newStudentList}
            </div>
        )
    }
}
