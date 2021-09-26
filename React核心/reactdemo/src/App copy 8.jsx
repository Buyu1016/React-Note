import React, { Component } from 'react'
import A from './components/OldContext/A'

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    componentDidMount() {
    }
    
    render() {
        return (
            <div>
                Hello
                <A />
            </div>
        )
    }
}
