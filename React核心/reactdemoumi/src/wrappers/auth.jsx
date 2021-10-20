import React from 'react'
import { connect, Redirect } from 'umi'

function Authentication(props) {
    console.log('已运行')
    if (!props.user.isLogin) {
        alert('请先进行登录')
        return <Redirect to={"/login"}/>
    }
    return (
        <>{props.children}</>
    )
}

export default connect(state => state, dispatch => ({}))(Authentication)
