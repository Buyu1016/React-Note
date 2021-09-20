import React, { Component } from 'react'

export default class OldLife extends Component {
    constructor(props) {
        super(props)
        this.state = {
            index: 0
        }
        console.log('constructor阶段执行了')
    }

    componentWillMount() {
        console.log('componentWillMount阶段执行了')
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
    componentDidMount() {
        console.log('componentDidMount阶段执行了')
    }
    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps阶段执行了, 新Props值为: ', nextProps)
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate阶段执行了, 新Props值为:', nextProps, ',新State值为:', nextState)
        return true
    }
    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate阶段执行了')
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate阶段执行了')
    }
    componentWillUnmount() {
        console.log('componentWillUnmount阶段执行了')
    }
    
    
}
