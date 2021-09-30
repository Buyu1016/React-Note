import React, { PureComponent } from 'react'

export default class App extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {}
    }
    
    render() {
        return (
            <div onClick={() => {
                console.log('div触发')
            }}>
                组件App
                <button onClick={() => {
                    console.log('button触发')
                }}>Click</button>
            </div>
        )
    }
}

document.querySelector('#root').onclick = (e) => {
    console.log('root事件执行了')
    // console.log(e)
    // e.stopPropagation()
}
