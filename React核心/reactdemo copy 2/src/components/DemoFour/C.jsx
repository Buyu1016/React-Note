import React, { PureComponent } from 'react'

export default class C extends PureComponent {

    state = {}

    // shouldComponentUpdate(nextProps, nextState) {
    //     // 这里比较对象是错误的做法, 对象比较应该比较地址
    //     if (this.props === nextProps && this.state === nextState) {
    //         return false
    //     }
    //     return true
    // }
    

    render() {
        console.log('C render')
        return (
            <li
                style={{
                    color: this.props.ifComplete ? "green" : "red"
                }}
            >
                任务{this.props.name}
            </li>
        )
    }
}
