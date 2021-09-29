import React, { PureComponent } from 'react'

export default class App extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {}
    }
    
    render() {
        return (
            <div>
                组件App
                <ErrorBoundary>
                    <A />
                </ErrorBoundary>
                <C />
            </div>
        )
    }
}

class A extends PureComponent {
    render() {
        throw new Error('A组件发生错误')
        return (
            <div>
                A
                <B />
            </div>
        )
    }
}

class B extends PureComponent {
    render() {
        return (
            <div>
                B
            </div>
        )
    }
}
class C extends PureComponent {
    render() {
        return (
            <div>
                C
            </div>
        )
    }
}

class ErrorBoundary extends PureComponent {

    state = {
        ifError: false
    }

    // 此方法仅在子组件发生错误时会触发, 自身组件发生变化时发生错误是无法捕获到的
    // static getDerivedStateFromError(error) {
    //     console.log('错误发生', error)
    //     // 返回一个对象, 该对象会覆盖掉原来的state
    //     return {
    //         ifError: true
    //     }
    // }

    componentDidCatch(error, info) {
        console.log('发生错误', error, info)
        this.setState(cur => {
            return {
                ifError: true
            }
        })
    }

    render() {
        if (this.state.ifError) {
            return (
                <>组件发生错误</>
            )
        } else {
            return (
                <>{this.props.children}</>
            )
        }
    }
}


