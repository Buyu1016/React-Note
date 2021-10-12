import React, { Component } from 'react'

export default function DemoHoc(Comp) {
    return class HOC extends Component {
        componentDidMount() {
            console.log(Comp.name + '的componentDidMount阶段执行了')
        }
        componentWillUnmount() {
            console.log(Comp.name + '的componentWillUnmount阶段执行了')
        }
        render() {
            return <Comp {...this.props}/>
        }
    }
}
