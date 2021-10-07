import React, { useState } from 'react'
import './login.css'

export default function Login() {

    const [account, setAccount] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className={"login-container"}>
            <label>
                    账号: 
                    <input
                        type="text"
                        value={account}
                        onChange={(e) => {
                            setAccount(e.target.value)
                        }}
                    />
                </label>
                <label>
                    密码: 
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                    />
                </label>
                <button>登录</button>
                <button><a href="/">返回</a></button>
        </div>
    )
}
