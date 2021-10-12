import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { context } from '../Form/context'

export default class Button extends Component {
    
    static contextType = context

    static defaultProps = {
        type: 'button',
        value: '按钮'
    }

    static propTypes = {
        type: PropTypes.string,
        value: PropTypes.string,
        onClick: PropTypes.func,
    }
    
    render() {
        return (
            <button
                type={this.props.type}
                onClick={() => {
                    this.context.submit(this.context.formData)
                }}
            >
                {this.props.value}
            </button>
        )
    }
}
