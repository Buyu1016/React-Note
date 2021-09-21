import React, { Component } from 'react'
export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: '',
            lock: true
        }
    }
    render() {
        return (
            <div>
                {/* 默认为非受控组件 */}
                <input type="text" />
                {/* 单独设置value时会变为受控组件 */}
                {/* value需要和onChange事件/readOnly配合使用 */}
                {/* 如果需要设置默认值则设置defaultValue值 */}
                <input type="number" value={this.state.value} onChange={(e) => {
                    this.setState({
                        value: e.target.value
                    })
                }}/>
                <input type="checkbox" checked={this.state.lock} onChange={() => {
                    this.setState({
                        lock: !this.state.lock
                    })
                }}/>
            </div>
        )
    }
}
