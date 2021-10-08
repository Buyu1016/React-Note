import React, { Component } from 'react'
import { getNumArray } from '../utils/tools'

/**
 * 属性:
 *  current: 当前页
 *  total: 数据总量
 *  limit: 页容量
 *  onChangePage: 改变页码触发的函数
 * 状态:
 *  current: 当前页
 */


export default class Page extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: this.props.total === 0 ? 0 : this.props.current,
            rLis: [],
            range: this.props.range ? this.props.range : 6,
            totalPage: Math.ceil(this.props.total/this.props.limit)
        }
        this.handleBackHome = () => {
            this.handleChangePage(1, this.state.current)
        }
        this.handlePrevPage = () => {
            this.handleChangePage(this.state.current - 1, this.state.current)
        }
        this.handleNextPage = () => {
            this.handleChangePage(this.state.current + 1, this.state.current)
        }
        this.handleBackLast = () => {
            this.handleChangePage(this.state.totalPage, this.state.current)
        }
        this.handleChangePage = (target, current) => {
            if (target < 1) target = 1
            if (target > this.state.totalPage) target = this.state.totalPage
            if (current === target) return
            this.setState({
                current: target
            })
            this.props.onChangePage&&this.props.onChangePage(target)
            this.renderLis()
        }
        this.renderLis = () => {
            setTimeout(() => {
                const nArr = getNumArray(this.state.current, this.state.range, this.state.totalPage).map(item => {
                    return <li
                        className={this.state.current === item ? 'item active' : 'item'}
                        key={item}
                        onClick={(e) => {
                            this.handleChangePage(+e.target.innerText, this.state.current)
                        }}
                    >{item}</li>
                })
                this.setState({
                    rLis: nArr
                })
            }, 0)
        }
        this.renderLis()
    }
    render() {
        console.log(this.props, this.state)
        const prev = this.state.current === 1 || this.state.current === 0 ? 'item disabled' : 'item'
        const next = this.state.current === this.state.totalPage ? 'item disabled' : 'item'
        return (
            <>
               <li className={prev} onClick={this.handleBackHome}>首页</li>
               <li className={prev} onClick={this.handlePrevPage}>上一页</li>
               {this.state.rLis}
               <li className={next} onClick={this.handleNextPage}>下一页</li>
               <li className={next} onClick={this.handleBackLast}>尾页</li>
               <span>{this.state.current}/{this.state.totalPage}</span>
            </>
        )
    }
}
