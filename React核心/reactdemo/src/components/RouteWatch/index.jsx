import React, { PureComponent } from 'react'
import { withRouter } from 'react-router-dom'


class RouteWatch extends PureComponent {

    componentDidMount() {
        console.log(this.props)
        // 监听页面跳转
        this.listen = this.props.history.listen((location, action) => {
            this.props.onChange && this.props.onChange(location, action, this.props.location)
        })
        // 设置阻塞
        // 可以为字符串供给BrowserRouter的getUserConfirmation所用
        // 这里也可以使用函数, 函数返回true则跳转, false反之
        this.props.history.block(() => {
            // if (Math.random() > 0.5) {
            //     return true
            // } else {
            //     console.log('禁止跳转');
            //     return false
            // }
            return true
        })
    }
    
    componentWillUnmount() {
        // 关闭监听
        this.listen()
    }
    


    render() {
        return (
            <>{this.props.children}</>
        )
    }
}

export default withRouter(RouteWatch)
    