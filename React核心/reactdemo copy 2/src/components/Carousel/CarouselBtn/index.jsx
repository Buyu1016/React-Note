import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'

export default class CarouselBtn extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    static defaultProps = {
        ifShow: true
    }

    static propTypes = {
        ifShow: PropTypes.bool,
        direction: PropTypes.string,
        onClick: PropTypes.func.isRequired
    }

    render() {
        return (
            <span
                className={`carousel-${this.props.direction}-btn carousel-btn`}
                onClick={() => {
                    this.props.onClick()
                }}
                style={{
                    display: this.props.ifShow ? 'block' : 'none'
                }}
            >
                {this.props.direction === 'left' ? '<' : '>'}
            </span>
        )
    }
}
