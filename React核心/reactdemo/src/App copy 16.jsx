import React, { PureComponent } from 'react'

export default class App extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            list: ['CodeGorgeous', null, <p>芜湖</p>]
        }
    }
    static getDerivedStateFromProps(props, state) {
        console.log('执行')
        return null
    }
    render() {
        return (
            <div>
                <h1>
                    组件App
                    {this.state.list}
                </h1>
                <p>{undefined}</p>
            </div>
        )
    }
}

