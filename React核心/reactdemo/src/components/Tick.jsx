import React, { Component } from 'react'

export default class Tick extends Component {

    // *** 另一种初始化组件状态的方式
    // 暂未通过标准
    // state = {
    //     tick: this.props.tick,
    // }
    // ***

    // 组件状态
    constructor(props) {
        super(props)
        // 初始化组件状态
        this.state = {
            tick: this.props.tick,
        }
        this.timer = setInterval(() => {
            if (this.state.tick <= 0) {
                clearInterval(this.timer)
                return
            }
            // 只有设置this.setState()才会触发重新渲染
            // 可以理解为需要自己做数据放到this.setState()中才能变为响应式数据
            this.setState({
               tick: this.state.tick - 1,
            })
        }, 1000)
    }
    render() {
        if (this.state.tick === 0) {
            return (
                <h1>时间到</h1>
            )
        }
        return (
            <h1>
                倒计时: {this.state.tick}
            </h1>
        )
    }
}
