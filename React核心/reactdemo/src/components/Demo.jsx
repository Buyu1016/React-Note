import React, { Component } from 'react'

export default class Demo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            index: 0
        }
        this.handleChangeIndex = () => {
            // setState可能是异步的
            // this.setState({
            //     index: this.state.index + 1
            // }, () => {
            //     // 状态改变后会执行这个函数
            //     console.log(this.state.index)
            // })
            // setState的另一种写法
            this.setState(cur => {
                return {
                    index: cur.index + 1
                }
            })
            // 有可能打印会出现问题
            // console.log(this.state.index)
        }
    }
    render() {
        return (
            <div>
                Index: {this.state.index}
                <button onClick={this.handleChangeIndex}>+</button>
            </div>
        )
    }
}
