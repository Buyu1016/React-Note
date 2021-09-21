import React, { Component } from 'react'
import CheckBoxGroup from './components/CheckBoxGroup/index'
import RadioGroup from './components/RadioGroup/index'
export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            checkBoxArr: [{
                value: 1,
                text: '前端'
            }, {
                value: 2,
                text: 'Java后端'
            }, {
                value: 3,
                text: 'NodeJs后端'
            }]
        }
    }
    handleChange(val) {
        console.log(val)
    }
    render() {
        return (
            <div>
                <CheckBoxGroup data={this.state.checkBoxArr} default={[1,2]} name={"CheckBoxCoding"} onChange={this.handleChange}/>
                <RadioGroup data={this.state.checkBoxArr} default={1} name="RadioCoding" onChange={this.handleChange}/>
            </div>
        )
    }
}
