import React, { Component } from 'react'
import Test from './components/BlockMove/Test'

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    
    render() {
        return (
            <div>
                组件App
                <Test />
            </div>
        )
    }
}
