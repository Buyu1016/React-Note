import React, { Component } from 'react'
import ReactDOM from 'react-dom';

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    
    render() {
        return (
            <div onClick={() => {
                console.log('点击')
            }}>
                组件App
                <A />
            </div>
        )
    }
}

// 把组件渲染到另一个容器内
class A extends Component {
    render() {
        // 将元素渲染到#box标签内
        return ReactDOM.createPortal((
            <div>
                组件A
            </div>
        ), document.querySelector('#box'))
    }
}

