import React, { Component } from 'react'
import A from './components/DemoFour/A'

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    
    render() {
        return (
            <div>
                组件App
                <A />
            </div>
        )
    }
}
