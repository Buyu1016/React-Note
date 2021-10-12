import React, { Component } from 'react'
import './index.css'

export default class index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            main: this.props.mainWidth || '50%',
            left: this.props.leftWidth || '30%',
            right: this.props.rightWidth || '20%'
        }
    }
    render() {
        return (
            <div
                className="layout-container"
                style={{
                    minWidth: 800
                }}
            >
                <div
                    className="layout-main"
                    style={{
                        width: this.state.main
                    }}
                >
                    {this.props.main}
                </div>
                <div
                    className="layout-left"
                    style={{
                        width: this.state.left
                    }}
                >
                    {this.props.left}
                </div>
                <div
                    className="layout-right"
                    style={{
                        width: this.state.right
                    }}
                >
                    {this.props.right}
                </div>
            </div>
        )
    }
}
