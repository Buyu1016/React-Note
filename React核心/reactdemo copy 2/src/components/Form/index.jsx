import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Provider } from './context'
import Input from '../Input/index'
import Button from '../Button/index'

export default class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            formData: {},
            changeFormData: (key, value) => {
                this.setState(cur => {
                    return {
                        formData: {
                            ...this.state.formData,
                            [key]: value
                        }
                    }
                })
            },
            submit: (val) => {
                this.props.onSubmit && this.props.onSubmit(val)
            }
        }
    }


    static propTypes = {
        onSubmit: PropTypes.func.isRequired
    }
    
    render() {
        return (
            <Provider value={this.state}>
                <div>
                    {this.props.children}
                </div>
            </Provider>
        )
    }
}

Form.Input = Input
Form.Button = Button
