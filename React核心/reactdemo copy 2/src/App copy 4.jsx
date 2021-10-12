import React, { Component } from 'react'
import PropTypes from 'prop-types'
export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {}
        console.log(props) // {a: 1, b: 2}
        // 混合属性原理
        // Object.assign({}, defaultProps ,props)
    }
    // 属性默认值
    static defaultProps = {
        a: 1,
        b: 2
    }
    // 属性类型检查
    static propTypes = {
        // 类型必须为Number类型, 可以不填写
        // a: PropTypes.number,
        // 类型必须为Number类型, 必须填写
        a: PropTypes.number.isRequired,
    }
    render() {
        return (
            <div>
                Hello
                a: {this.props.a}, b: {this.props.b}
            </div>
        )
    }
}

// 构造函数.defaultProps = {}
