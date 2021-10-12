import React, { Component } from 'react'
import B from './B'
import context from './context'

// 通过context创建, React.createContext参数为数据默认值
// 多文件需要把这个提取出来为一个文件
// const context = React.createContext({
//     name: 'CodeGorgeous',
//     sex: 'male',
//     age: 21
// })

export default class A extends Component {
    constructor(props) {
        super(props)
        this.state = {
            age: 18
        }
    }
    render() {
        const Provider = context.Provider
        return (
            <div>
                {/* 通过设置value来设置上下文 */}
                <Provider value={{
                    name: 'maomao',
                    sex: 'female',
                    age: this.state.age
                }}>
                    组件A
                    <button onClick={() => {
                        this.setState(cur => {
                            return {
                                age: cur.age + 1
                            }
                        })
                    }}>Change</button>
                    <B />
                </Provider>
            </div>
        )
    }
}
