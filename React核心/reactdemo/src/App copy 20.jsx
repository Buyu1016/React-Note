import React, { PureComponent } from 'react'
import EffectHookDemo from './components/DemoSix/EffectHookDemo'

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
                    <EffectHookDemo />
                </h1>
            </div>
        )
    }
}
