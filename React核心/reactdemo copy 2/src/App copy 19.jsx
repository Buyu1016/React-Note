import React, { PureComponent } from 'react'
import UseStateDemo from './components/DemoSix/UseStateDemo'

export default class App extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div>
                <h1>
                    组件App
                    <UseStateDemo />
                </h1>
            </div>
        )
    }
}
