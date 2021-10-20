import React, { useState } from 'react'
import { history } from 'umi'

export default function Login(props) {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    return (
        <div>
            <label>账号:<input type="text" value={userName} onChange={e => setUserName(e.target.value)}/></label>
            <label>密码:<input type="password" value={password} onChange={e => setPassword(e.target.value)}/></label>
            <button
                onClick={() => {
                    history.push(`/${userName}`)
                    setUserName('')
                    setPassword('')
                }}
            >登录</button>
        </div>
    )
}
