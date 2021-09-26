import React, { Component } from 'react'
import context from './context'

export default class C extends Component {

    // 需要把上下文拿到, react内部把上下文放入该组件内
    static contextType = context

    render() {
        return (
            <div>
                组件C
                <h1>{this.context.name}</h1>
                <h1>{this.context.sex}</h1>
                <h1>{this.context.age}</h1>
            </div>
        )
    }
}
