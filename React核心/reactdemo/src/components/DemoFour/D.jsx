import React, { PureComponent } from 'react'

export default class D extends PureComponent {
    
    state = {
        name: ''
    }

    render() {
        console.log('D render')
        return (
            <div>
                <input
                    type="text"
                    value={this.state.name}
                    onChange={(e) => {
                        this.setState(cur => {
                            return {
                                name: e.target.value
                            }
                        })
                    }}
                />
                <button onClick={() => {
                    this.props.onAdd && this.props.onAdd({
                        name: this.state.name,
                        ifComplete: false
                    })
                }}>增加</button>
            </div>
        )
    }
}
