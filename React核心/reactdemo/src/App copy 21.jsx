import React, { PureComponent } from 'react'
import StudentList from './components/FunStuPage/StudentList'

export default class App extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div>
                <h1>
                    组件App
                    {/* 未完成4-4的demo, 半夜写，写道一半接口请求上限了, 我人麻了, 他喵的不写这个demo(ps: 可能那天想到会把补充完整) */}
                    <StudentList />
                </h1>
            </div>
        )
    }
}
