import React, { PureComponent } from 'react'
import './index.css'

export default class Move extends PureComponent {
    
    constructor(props) {
        super(props)
        this.oBox = React.createRef()
    }

    state = {
        x: 0,
        y: 0
    }

    handleBoxMove = (e) => {
        if (this.state.x < 0 || this.state.x > this.oBox.current.offsetLeft + this.oBox.current.offsetWidth) {
            this.setState(cur => {
                return {
                    x: 0,
                    y: 0
                }
            })
            return
        } else if (this.state.y < 0 || this.state.y > this.oBox.current.offsetHeight) {
            this.setState(cur => {
                return {
                    x: 0,
                    y: 0
                }
            })
            return
        }
        this.setState(cur => {
            return {
                x: e.clientX - this.oBox.current.offsetLeft,
                y: e.clientY - this.oBox.current.offsetTop
            }
        })
    }

    render() {
        return (
            <div
                ref={this.oBox}
                className={'box'} 
                onMouseMove={this.handleBoxMove}
            >
                {/* <div
                    style={{
                        width: 100,
                        height: 100,
                        background: '#abcdef',
                        position: 'absolute',
                        left: this.state.x,
                        top: this.state.y
                    }}
                ></div> */}
                {this.props.children(this.state.x, this.state.y)}
            </div>
        )
    }
}
