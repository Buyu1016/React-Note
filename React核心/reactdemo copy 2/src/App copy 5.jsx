import React, { Component } from 'react'
import {DemoOne, DemoTwo } from './components/DemoThree/index'
import DemoHoc from './components/DemoThree/DemoHoc'

const OneHoc = DemoHoc(DemoOne)
        const TwoHoc = DemoHoc(DemoTwo)
export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div>
                Hello
                <OneHoc />
                <TwoHoc />
            </div>
        )
    }
}
