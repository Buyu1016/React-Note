import React, { Component } from 'react'
import Mantle from './index.jsx'

export default class Test extends Component {
    constructor(props) {
        super(props)
        this.state = {
            lock: false
        }
    }
    render() {
        return (
            <div>
                {this.state.lock ? (<Mantle
                    onClose={() => {
                        this.setState(cur => {
                            return {
                                lock: false
                            }
                        })
                    }}
                >
                    <div
                        style={{
                            background: '#ffffff'
                        }}
                    >
                        <h2>这是一个遮罩层</h2>
                        <button onClick={() => {
                            this.setState({
                                lock: false
                            })
                        }}>关闭</button>
                    </div>
                </Mantle>) : null}
                <button onClick={() => {
                    this.setState({
                        lock: true
                    })
                }}>打开</button>
            </div>
        )
    }
}
