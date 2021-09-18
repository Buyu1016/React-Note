import React, { Component } from 'react'

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
            current: this.props.current
        }
        this.totalPage = Math.ceil(this.props.total/this.props.limit)
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
            this.handleChangePage(this.totalPage, this.state.current)
        }
        this.handleChangePage = (target, current) => {
            if (target < 1) target = 1
            if (target > this.totalPage) target = this.totalPage
            if (current === target) return
            this.setState({
                current: target
            })
            this.props.onChangePage&&this.props.onChangePage(this.state.current)
        }
    }

    render() {
        const prev = this.state.current === 1 ? 'item disabled' : 'item'
        const next = this.state.current === this.totalPage ? 'item disabled' : 'item'
        return (
            <>
               <li className={prev} onClick={this.handleBackHome}>首页</li>
               <li className={prev} onClick={this.handlePrevPage}>上一页</li>
               <li className='item'>中间</li>
               <li className={next} onClick={this.handleNextPage}>下一页</li>
               <li className={next} onClick={this.handleBackLast}>尾页</li>
               <span>{this.state.current}/{this.totalPage}</span>
            </>
        )
    }
}
