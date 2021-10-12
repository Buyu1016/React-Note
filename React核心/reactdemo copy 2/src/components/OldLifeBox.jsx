import React, { Component } from 'react'
import OldLife from './OldLife'

export default class OldLifeBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            index: 0,
            lock: true
        }
    }
    render() {
        const life = this.state.lock ? <OldLife i={this.state.index}/> : null
        return (
            <div>
                <button onClick={() => {
                    this.setState(cur => ({index: this.state.index + 1}))
                }}>改变Props</button>
                {life}
                <button onClick={() => {
                    this.setState(cur => ({lock: !cur.lock}))
                }}>显示/隐藏</button>
            </div>
        )
    }
}
