import React, { useState } from 'react'
import { connect } from 'umi'
import style from './login.css'
import globalStyle from '@/assets/css/global.css'

function Login(props) {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    return (
        <div className={style['sign-container']}>
            <label className={style['user-name']}>账号:<input type="text" value={userName} onChange={e => setUserName(e.target.value)}/></label>
            <label>密码:<input type="password" value={password} onChange={e => setPassword(e.target.value)}/></label>
            <button
                className={globalStyle['button-style']}
                onClick={() => {
                    props.onAsyncSignIn({
                        name: userName,
                        password: password,
                    })
                    setUserName('')
                    setPassword('')
                }}
            >登录</button>
        </div>
    )
}

export default connect(state => state, dispatch => {
    return {
        onAsyncSignIn(payload) {
            dispatch({type: 'user/asyncSignIn', payload})
        }
    }
})(Login)
