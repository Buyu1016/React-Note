import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class C extends Component {
    constructor(props, context) {
        super(props)
        this.state = {}
        console.log(context) // {uid: '0120129', name: 'CodeGorgeous'}
    }
    // 必须重新明确上下文数据类型
    static contextTypes = {
        age: PropTypes.number,
        uid: PropTypes.string,
        name: PropTypes.bool
    }

    render() {
        return (
            <div>
                组件C
                <h1>{this.context.uid}</h1>
                <h2>{this.context.name}</h2>
            </div>
        )
    }
}
