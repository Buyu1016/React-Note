import React, { Component } from 'react'

export default class Sphere extends Component {
    constructor(props) {
        super(props)
        this.state = {
            left: this.props.left ? this.props.left : 0,
            top: this.props.top ? this.props.top : 0,
        }
        this.speedX = props.speed
        this.speedY = props.speed
        this.width = window.innerWidth
        this.height =  window.innerHeight
        setInterval(() => {
            // 此段代码打开可以显示小球移动路径
            /*
                const oDir = document.createElement('span')
                oDir.classList.add('dir')
                oDir.style.left = this.state.left + props.size/2 + 'px'
                oDir.style.top = this.state.top + props.size/2 + 'px'
                document.body.appendChild(oDir)
            */
            if (this.state.left + props.size >= this.width || this.state.left < 0) {
                if (this.state.left < 0) {
                    this.setState({
                        left: 0
                    })
                } else {
                    this.setState({
                        left: this.width - props.size
                    })
                }
                this.speedX = -this.speedX
            }
            if (this.state.top + props.size >= this.height || this.state.top < 0) {
                if (this.state.top < 0) {
                    this.setState({
                        top: 0
                    })
                } else {
                    this.setState({
                        top: this.height - props.size
                    })
                }
                this.speedY = -this.speedY
            }
            // 数据响应并让页面血染
            this.setState({
                left: this.state.left + this.speedX,
                top: this.state.top + this.speedY
            })
        }, 10)
    }
    render() {
        return (
            <div
                className="sphere"
                style={{
                    width: this.props.size ? this.props.size : 100,
                    height: this.props.size ? this.props.size : 100,
                    left: this.state.left,
                    top: this.state.top,
                    background: this.props.background ? this.props.background : '#abcdef'
                }}
            >
            </div>
        )
    }
}
