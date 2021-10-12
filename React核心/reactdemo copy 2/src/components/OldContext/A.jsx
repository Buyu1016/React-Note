import React, { Component } from 'react'
import PropTypes from 'prop-types'
import B from './B'

export default class A extends Component {
    constructor(props) {
        super(props)
        this.state = {
            uid: '0120129',
            name: 'CodeGorgeous',
        }
    }
    // 规定上下文数据类型
    static childContextTypes = {
        uid: PropTypes.string,
        name: PropTypes.string
    }
    // 设置上下文数据
    getChildContext() {
        return {
            uid: this.state.uid,
            name: this.state.name
        }
    }

    render() {
        return (
            <div>
                组件A
                <B />
            </div>
        )
    }
}
