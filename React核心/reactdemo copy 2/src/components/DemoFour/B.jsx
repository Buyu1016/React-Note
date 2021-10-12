import React, { Component } from 'react'
import C from './C'

export default class B extends Component {
    render() {
        console.log('B render')
        const oLis = this.props.list.map((item, index) => {
            return <C key={index} {...item}/>
        })
        return (
            <ul>
                {oLis}
            </ul>
        )
    }
}
