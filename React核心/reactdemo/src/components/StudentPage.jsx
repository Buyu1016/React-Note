import React, { Component } from 'react'
import StudentList from './StudentList'
import Page from './Page'

export default class StudentPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            current: this.props.stuList.length === 0 ? 0 : 1,
        }
        this.handleChangePage = (val) => {
            this.setState({
                current: val,
            })
        }
    }
    render() {
        const start = this.props.limit * (this.state.current - 1)
        const end = start + this.props.limit
        const list = this.props.stuList.slice(start, end)
        return (
            <div>
                <StudentList stuList={list} />
                <Page current={this.state.current} total={this.props.stuList.length} limit={this.props.limit} onChangePage={this.handleChangePage}/>
            </div>
        )
    }
}
