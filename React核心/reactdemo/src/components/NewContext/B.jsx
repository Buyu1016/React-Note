import React, { Component } from 'react'
import C from './C'
import context from './context'

export default class B extends Component {
    render() {
        console.log('B的render执行了')
        const Consumer = context.Consumer
        return (
            <Consumer>
                {value => {
                    return (
                        <>
                            <div>
                                组件B
                                <h1>{value.name}</h1>
                                <h1>{value.sex}</h1>
                                <h1>{value.age}</h1>
                                <C />
                            </div>
                        </>
                    )
                }}
            </Consumer>
        )
    }
}
