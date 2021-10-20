import React from 'react'
import { connect, Redirect } from 'umi'

function User(props) {
    if (!props.user.isLogin) {
        alert('请先进行登录')
        return <Redirect to={"/login"}/>
    }
    return (
        <div>
            Hello {props.user.name}
        </div>
    )
}

User.wrappers = ['@/wrappers/auth.jsx']

export default connect(state => state, dispatch => {
    return {
        onSignOut() {
            dispatch({type: 'user/asyncSignOut'})
        }
    }
})(User)