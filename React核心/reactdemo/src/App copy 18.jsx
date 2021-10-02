import React, { PureComponent } from 'react'

export default class App extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {}
        setTimeout(() => {
            console.log('Hello')
        }, 1000);
    }

    render() {
        return (
            <div>
                <h1>
                    组件App
                </h1>
            </div>
        )
    }
}
