import React, { Component } from 'react'

export default class NewLife extends Component {
    constructor(props) {
        super(props)
        this.state = {
            index: 0
        }
        console.log('constructor阶段执行了')
    }
    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps阶段执行了', props, state)
        return {}
    }
    render() {
        console.log('render阶段执行了')
        return (
            <div>
                <h1>属性: {this.props.i}</h1>
                <h1>状态: {this.state.index}</h1>
                <button onClick={() => {
                    this.setState(cur => ({index: cur.index + 1}))
                }}>改变State</button>
            </div>
        )
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate阶段执行了', nextProps, nextState)
        return true
    }
    
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate阶段执行了', prevProps, prevState)
        return 'Hello'
    }

    componentDidUpdate(prevProps, prevState, val) {
        console.log('componentDidUpdate阶段执行了', val)
    }
    
    
}
