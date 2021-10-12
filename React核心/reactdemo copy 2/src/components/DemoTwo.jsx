import React, { Component } from 'react'

export default class DemoTwo extends Component {
    constructor(props) {
        super(props)
        console.log(props)
    }
    render() {
        return (
            <div>
                {this.props.html}
                {this.props.children}
            </div>
        )
    }
}
