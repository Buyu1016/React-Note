import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'
import Image from '../Image/index'


export default class Carousel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            current: 0,
            distance: 0
        }
        this.rDiv = React.createRef()
        this.timer = null
    }
    
    static defaultProps = {
        data: [],
        width: 500,
        height: 300,
        interval: 2000,
        ifLoop: true
    }

    static propTypes = {
        data: PropTypes.arrayOf(PropTypes.string),
        width: PropTypes.number,
        height: PropTypes.number,
        interval: PropTypes.number,
        ifLoop: PropTypes.bool
    }
    
    componentDidMount() {
        if (this.props.ifLoop) {
            this.startTimer()
        }
    }
    
    startTimer() {
        this.stopTimer()
        this.timer = setInterval(() => {
            if (this.state.current >= this.props.data.length - 1) {
                this.setState(cur => {
                    return {
                        current: 0
                    }
                })
            } else if (this.state.current < 0) {
                this.setState(cur => {
                    return {
                        current: this.props.data.length - 1
                    }
                })
            } else {
                this.setState(cur => {
                    return {
                        current: this.state.current + 1
                    }
                })
            }
            this.setState(cur => {
                return {
                    distance: this.state.current * this.props.width
                }
            })
        }, this.props.interval)
    }

    stopTimer() {
        clearInterval(this.timer)
    }

    render() {
        const list = this.props.data.map((item, index) => {
            return <Image src={item} width={this.props.width} height={this.props.height}key={index}/>
        })
        
        return (
            <div
                className="carousel-container"
                style={{
                    width: this.props.width + 'px',
                    height: this.props.height + 'px'
                }}
            >
                <div
                    className="carousel-list-container"
                    ref={this.rDiv}
                    style={{
                        width: this.props.width * this.props.data.length + 'px',
                        height: this.props.height + 'px',
                        left: -this.state.distance + 'px'
                    }}
                >
                    {list}
                </div>
            </div>
        )
    }
}
