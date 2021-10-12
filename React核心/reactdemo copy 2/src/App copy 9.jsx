import React, { Component } from 'react'
import A from './components/NewContext/A'

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
