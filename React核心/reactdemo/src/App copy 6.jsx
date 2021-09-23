import React, { Component } from 'react'

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.inputText = React.createRef()
        this.btn = React.createRef()
        console.log('constructor阶段执行了')
    }
    handleClick() {
        this.refs.A.handleClick()
        // 旧版本调用方式
        // this.refs.inputText.focus()
        // 新版本调用方式(对象)
        // this.inputText.current.focus()
        // 新版本调用方式(函数)
        this.inputText.focus()
    }
    componentDidMount() {
        console.log('componentDidMount阶段执行了')
    }
    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps阶段执行了')
        return {}
    }
    render() {
        return (
            <div>
                {/* 旧版本ref方式 */}
                {/* <input ref="inputText" type="text" /> */}
                {/* 新版本ref(对象)方式 */}
                {/* <input ref={this.inputText} type="text" /> */}
                {/* 新版本ref(函数)方式 */}
                <input ref={el => {
                    console.log('执行')
                    this.inputText = el
                }} type="text" />
                <button
                    ref={this.btn}
                onClick={() => {
                    this.handleClick()
                }}>聚焦</button>
                <A ref="A"/>
            </div>
        )
    }
}

class A extends React.PureComponent {
    constructor(props) {
        super(props)
        this.h1 = React.createRef()
    }
    handleClick() {
        console.log('A组件被调用了')
    }
    render() {
        return (
            <div>
                <h1 ref={this.h1}>Hello A Component</h1>
            </div>
        )
    }
}
