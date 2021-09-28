import React, { Component } from 'react'
import D from './D'
import B from './B'


export default class A extends Component {
    
    state = {
        list: []
    }

    componentDidMount() {
        const result = []
        for (let i = 0; i < 10; i++) {
            result.push({
                name: i,
                ifComplete: Math.random() > 0.5 ? true : false
            })
        }
        this.setState(cur => {
            return {
                list: result
            }
        })
    }
    
    handleAdd = (val) => {
        this.setState(cur => {
            return {
                list: [...this.state.list, val]
            }
        })
    }

    render() {
        console.log('A render执行')
        return (
            <div>
                <D onAdd={this.handleAdd}/>
                <B list={this.state.list}/>
            </div>
        )
    }
}
