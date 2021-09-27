import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Consumer } from '../Form/context'

export default class Input extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    static defaultProps = {
        type: 'text'
    }

    static propTypes = {
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired
    }

    render() {
        return (
            <Consumer>
                {value => {
                    return (
                        <input
                            type={this.props.type}
                            name={this.props.name}
                            value={value.formData[this.props.name] || ''}
                            onChange={(e) => {
                                value.changeFormData(this.props.name, e.target.value)
                            }}
                        />
                    )
                }}
            </Consumer>
        )
    }
}
