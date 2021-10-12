import React, { Component } from 'react'
import './index.css'

export default class Mantle extends Component {
    constructor(props) {
        super(props)
        this.default = {
            background: props.background || '#ccc'
        }
    }
    render() {
        return (
            <div
                className="mantle-container"
                style={{
                    background: this.default.background
                }}
                onClick={(e) => {
                    if (e.target.className === 'mantle-container') {
                        this.props.onClose && this.props.onClose()
                    }
                }}
            >
                {this.props.children}
            </div>
        )
    }
}
