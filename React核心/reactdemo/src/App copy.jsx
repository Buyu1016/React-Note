import React, { Component } from 'react'
import Layout from './components/Layout/index'

export default class App extends Component {
    render() {
        return (
            <div style={{
                width: '100%',
                height: '100%'
            }}>
                <Layout
                    main={<h1>Main</h1>}
                    left={<h1>Left</h1>}
                    right={<h1>Right</h1>}
                />
            </div>
        )
    }
}
