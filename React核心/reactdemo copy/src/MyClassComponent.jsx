import React from 'react';

// 必须继承React.Component
export default class MyClassComponent extends React.Component {
    // 可以默认不写的
    // constructor(props) {
    //     super(props);
    // }
    // 必要返回一个React对象
    render() {
        return this.props.ui ? this.props.ui : <h1>Hello React Class Component, {this.props.number}</h1>
    }
}
