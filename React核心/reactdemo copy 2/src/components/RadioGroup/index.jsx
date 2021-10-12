import React, { Component } from 'react'

/**
 * Props:
 *  data: 数据渲染列表
 *      [{value: '', text: ''}]
 *  default: 默认选中value列表值
 *  name: 多选框的name值
 * onChange: 抛出事件, 参数一为当前单选框框所选中选项的value
 */

export default class RadioGroup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectData: this.props.default ? this.props.default : ''
        }
    }
    render() {
        const rData = this.props.data.map((item, index) => {
            return <label
                key={index}>
                    <input
                        type="radio"
                        value={item.value}
                        checked={this.state.selectData === item.value}
                        onChange={(e) => {
                            if (e.target.checked) {
                                this.setState(cur => {
                                    return {
                                        selectData: item.value
                                    }
                                }, () => {
                                    this.props.onChange && this.props.onChange(this.state.selectData)
                                })
                            } else {
                                this.setState(cur => {
                                    return {
                                        selectData: ''
                                    }
                                }, () => {
                                    this.props.onChange && this.props.onChange(this.state.selectData)
                                })
                            }
                        }}
                        name={this.props.name}
                    />
                    {item.text}
            </label>
        })
        return (
            <div>
                {rData}
            </div>
        )
    }
}
