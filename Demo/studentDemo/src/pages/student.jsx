import React from 'react'
import { connect } from 'umi'
import StudentList from '@/components/StudentList'
import student from '../models/student'

function Student(props) {
    return (
        <div>
            学生列表
            <button
                onClick={props.onGetAll}
            >获取</button>
            <h1>{props.student.count === 0 ? null : `学生总数: ${props.student.count}`}</h1>
            <StudentList studentList={props.student.datas}/>
        </div>
    )
}

export default connect(state => state, dispatch => {
    return {
        onGetAll() {
            dispatch({type: 'student/asyncSetStudent'})
        }
    }
})(Student)
