import React, { PureComponent } from 'react'
import Move from './index'

export default class Test extends PureComponent {
    render() {
        return (
            <div>
                <Move>
                    {(x, y) => {
                        return (
                            <h2>x: {x}, y: {y}</h2>
                        )
                    }}
                </Move>
                <Move>
                    {(x, y) => {
                        return (
                            <div
                                style={{
                                    width: 100,
                                    height: 100,
                                    background: '#abcdef',
                                    position: 'absolute',
                                    left: x,
                                    top: y
                                }}
                            ></div>
                        )
                    }}
                </Move>
            </div>
            
        )
    }
}
