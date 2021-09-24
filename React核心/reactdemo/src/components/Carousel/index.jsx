import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'
import Image from '../Image/index'
import CarouselDir from './CarouselDir/index'
import CarouselBtn from './CarouselBtn/index'

export default class Carousel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            current: 0,
            distance: 0,
            showSwitch: false
        }
        this.rDiv = React.createRef()
        this.oContainer = React.createRef()
        this.timer = null
        this.lock = true
        this.handleClick = this.handleClick.bind(this)
        this.handleDirClick = this.handleDirClick.bind(this)
        this.btnShowSwitch = this.btnShowSwitch.bind(this)
    }
    
    static defaultProps = {
        data: [],
        width: 500,
        height: 300,
        interval: 2000,
        ifLoop: true,
        transition: 1000
    }

    static propTypes = {
        data: PropTypes.arrayOf(PropTypes.string),
        width: PropTypes.number,
        height: PropTypes.number,
        interval: PropTypes.number,
        ifLoop: PropTypes.bool,
        transition: PropTypes.number
    }
    
    componentDidMount() {
        if (this.props.ifLoop) {
            this.startTimer()
        }
        this.oContainer.current.addEventListener('mouseenter', this.btnShowSwitch)
        this.oContainer.current.addEventListener('mouseleave', this.btnShowSwitch)
    }
    
    btnShowSwitch(e) {
        this.setState(cur => {
            return {
                showSwitch: e.type === 'mouseenter' ? true : false
            }
        })
        if (e.type === 'mouseenter') {
            this.stopTimer()
        } else if (e.type === 'mouseleave') {
            this.startTimer()
        }
    }

    startTimer() {
        this.stopTimer()
        this.timer = setInterval(() => {
            this.correctingCurrent('right')
        }, this.props.interval)
    }

    stopTimer() {
        clearInterval(this.timer)
    }

    handleClick(direction) {
        this.stopTimer()
        this.correctingCurrent(direction)
    }

    correctingCurrent(direction) {
        if (!this.lock) return
        this.lock = false
        if (direction === 'left') {
            this.setState(cur => {
                const lock = cur.current - 1 < 0
                if (lock) {}
                return {
                    current: lock ? this.props.data.length - 1 : cur.current - 1
                }
            })
        } else if (direction === 'right') {
            this.setState(cur => {
                return {
                    current: cur.current + 1 >= this.props.data.length ? 0 : cur.current + 1
                }
            })
        }
        this.setState(cur => {
            return {
                distance: cur.current * this.props.width
            }
        })
        setTimeout(() => {
            this.lock = true
        }, this.props.transition)
    }

    handleDirClick(index) {
        this.stopTimer()
        this.setState(cur => {
            return {
                current: index
            }
        })
        this.setState(cur => {
            return {
                distance: cur.current * this.props.width
            }
        })
    }

    render() {
        const list = this.props.data.map((item, index) => {
            return <Image src={item} width={this.props.width} height={this.props.height}key={index}/>
        })
        
        return (
            <div
                ref={this.oContainer}
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
                        left: -this.state.distance + 'px',
                        transition: `left ${this.props.transition/1000}s ease-in-out`
                    }}
                >
                    {list}
                </div>
                <CarouselBtn
                ifShow={this.state.showSwitch}
                    direction={"left"}
                    onClick={() => {
                        this.handleClick('left') 
                    }}
                />
                <CarouselBtn
                    ifShow={this.state.showSwitch}
                    direction={"right"}
                    onClick={() => {
                        this.handleClick('right') 
                    }}
                />
                <CarouselDir
                    className="carousel-dir"
                    current={this.state.current}
                    total={this.props.data.length}
                    onClick={this.handleDirClick}
                />
            </div>
        )
    }
    componentWillUnmount() {
        this.stopTimer()
        this.oContainer.current.removeEventListener('mouseenter', this.btnShowSwitch)
        this.oContainer.current.removeEventListener('mouseleave', this.btnShowSwitch)
    }
}
