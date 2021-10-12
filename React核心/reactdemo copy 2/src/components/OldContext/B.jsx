import React, { Component } from 'react'
import PropTypes from 'prop-types'
import C from './C'

export default class B extends Component {
    constructor(props, context) {
        super(props)
        this.state = {
            name: false,
            age: 18
        }
        console.log(context)
    }
    // 必须重新明确上下文数据类型
    static contextTypes = {
        uid: PropTypes.string,
        name: PropTypes.string
    }
    // 规定上下文数据类型
    static childContextTypes = {
        age: PropTypes.number,
        name: PropTypes.bool
    }
    // 设置上下文数据
    getChildContext() {
        return {
            age: this.state.age,
            name: this.state.name
        }
    }
    render() {
        return (
            <div>
                组件B
                <C />
            </div>
        )
    }
}
