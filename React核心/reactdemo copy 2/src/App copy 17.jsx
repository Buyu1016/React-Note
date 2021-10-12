import React, { PureComponent } from 'react'

export default class App extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            arr: [<D key={1}/>, <D key={2}/>],
            i: 3
        }
    }

    render() {
        return (
            <div>
                <h1>
                    组件App
                    {/* <A /> */}
                    {this.state.arr}
                    <button onClick={() => {
                        this.setState(cur => {
                            return {
                                arr: [<D key={this.state.i}/>, ...cur.arr],
                                i: cur.i + 1
                            }
                        })
                    }}>增加</button>
                </h1>
            </div>
        )
    }
}

class A extends React.Component {

    state = {
        name: 'CodeGorgeous',
        age: 21,
        lock: false
    }

    render() {
        return (
            <div>
                A
                {this.state.lock ? '开启' : null}
                <B age={this.state.age}/>
                <button onClick={() => {
                    this.setState(cur => {
                        return {
                            age: cur.age + 1,
                            lock: !cur.lock
                        }
                    })
                }}>增加年纪</button>
            </div>
        )
    }
}

class B extends React.Component {
    render() {
        return (
            <div>
                <h1>B</h1>
                {this.props.age}
                <C />
            </div>
        )
    }
}

class C extends React.Component {
    render() {
        return (
            <div>
                C
            </div>
        )
    }
}

class D extends React.Component {
    
    state = {
        n: 1
    }

    render() {
        return (
            <div>
                数字: {this.state.n}
                <button onClick={() => {
                    this.setState(cur => {
                        return {
                            n: cur.n + 1
                        }
                    })
                }}>+</button>
            </div>
        )
    }
}
