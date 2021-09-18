import React, { Component } from 'react'

export default class TickTwo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            num: this.props.num
        }
        this.timer = null
        this.lock = false
    }
    start = () => {
        this.timer = setInterval(() => {
            this.setState({
                num: this.state.num - 1
            })
            if (this.state.num <= 0) {
                this.props.callback()
                clearInterval(this.timer)
            }
        }, 1000)
    }
    stop = () => {
        clearInterval(this.timer)
    }
    handleClick = () => {
        if (this.lock) {
            this.stop()
        } else {
            this.start()
        }
        this.lock = !this.lock
    }
    render() {
        return (
            <div>
                <h1>倒计时: {this.state.num}</h1>
                <button onClick={this.handleClick}>改变</button>
            </div>
        )
    }
}
