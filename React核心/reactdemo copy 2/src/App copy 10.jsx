import React, { Component } from 'react'
import Form from './components/Form'

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    
    render() {
        return (
            <div>
                组件App
                <Form onSubmit={(val) => {
                    console.log('提交', val)
                }}>
                    <div>
                        <label>账号: <Form.Input type="text" name="name"/></label>
                    </div>
                    <div>
                        <label>密码: <Form.Input type="password" name="password"/></label>
                    </div>
                    <Form.Button
                        value={"提交"}
                    />
                </Form>
            </div>
        )
    }
}
