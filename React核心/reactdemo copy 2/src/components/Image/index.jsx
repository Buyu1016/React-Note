import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'

export default class Image extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    static defaultProps = {
        src: '',
        alt: '',
        href: '#',
        width: 500,
        height: 300
    }

    static propTypes = {
        src: PropTypes.string,
        alt: PropTypes.string,
        href: PropTypes.string,
        width: PropTypes.number,
        height: PropTypes.number
    }

    render() {
        return (
            <a
                className="image-container"
                href={this.props.href}
                style={{
                    width: this.props.width,
                    height: this.props.height
                }}
            >
                <img src={this.props.src} alt={this.props.alt} />
            </a>
        )
    }
}
