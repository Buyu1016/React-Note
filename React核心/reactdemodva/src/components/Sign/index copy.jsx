import { useState } from 'react'
import { connect } from 'dva'

function User(props) {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
  
    return (
      <div>
        <h1>{props.user.isLogin ? `当前登录用户: ${props.user.userName}` : '当前暂未登录'}</h1>
        <div
          style={{
            display: props.user.isLogin ? 'none' : 'block'
          }}
        >
          <label>用户名: <input type="text" value={name} onChange={e => setName(e.target.value)}/></label>
          <label>密码: <input type="password" value={password} onChange={e => setPassword(e.target.value)}/></label>
        </div>
        <button onClick={() => {
          if (props.user.isLogin) {
            // props.onSignOut()
            // 异步登出
            props.onAsyncSignOut()
          } else {
            // props.onSignIn({userName: name, userPassword: password})
            // 异步登录
            props.onAsyncSignIn({userName: name, userPassword: password})
            setName('')
            setPassword('')
          }
        }}>{props.user.isLogin ? '登出' : '登入'}</button>
      </div>
    )
}
  
export default connect(state => ({user: state.user}), dispatch => {
    return {
        onSignIn(payload) {
        dispatch({type: 'user/signIn', payload})
        },
        onSignOut() {
        dispatch({type: 'user/signOut'})
        },
        onAsyncSignIn(payload) {
        dispatch({type: 'user/asyncSignIn', payload})
        },
        onAsyncSignOut() {
        dispatch({type: 'user/asyncSignOut'})
        }
    }
})(User)
