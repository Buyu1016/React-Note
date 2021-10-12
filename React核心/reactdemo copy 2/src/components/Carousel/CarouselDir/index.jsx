import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'

export default class CarouselDir extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    
    static defaultProps = {
        current: 0,
        total: 0,
        color: 'red'
    }

    static propTypes = {
        current: PropTypes.number.isRequired,
        total: PropTypes.number.isRequired,
        color: PropTypes.string,
        onClick: PropTypes.func,
    }

    render() {
        const oDirList = []
        for (let i = 0; i < this.props.total; i++) {
            oDirList.push((
                <span
                    className='carousel-dir-item'
                    style={{
                        background: this.props.current === i ? this.props.color : '#fff'
                    }}
                    key={i}
                    onClick={() => {
                        this.props.onClick(i)
                    }}
                >
                </span>
            ))
        }
        return (
            <div className="carousel-dir-container">
                {oDirList}
            </div>
        )
    }
}
