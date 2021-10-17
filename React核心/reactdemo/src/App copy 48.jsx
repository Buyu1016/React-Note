import React, { useState } from 'react'
// import { Provider, connect } from 'react-redux';
import { Provider, connect } from './utils/rewriteRedux/react-redux';
import store from './redux'
import { actions } from './redux/action/cookieAction'

export default function App() {
    return (
      <Provider store={store}>
        <div>
          Hello
          <NewSetCookie/>
        </div>
      </Provider>
    );
}

function SetCookie(props) { // props: {student: [], cookie: [], onSetCookie: []}
  const [key, setKey] = useState('')
  const [value, setValue] = useState('')
  return (
    <div>
      key: <input type="text" value={key} onChange={e => setKey(e.target.value)}/>
      value: <input type="text" value={value} onChange={e => setValue(e.target.value)}/>
      <button onClick={() => {
        props.onSetCookie && props.onSetCookie({
          key,
          value,
        })
      }}>确定添加</button>
      <button onClick={() => {
        console.log(props.store)
      }}>click</button>
    </div>
  )
}

// 第二个参数为对象的情况
const hoc = connect((state) => state, (dispatch) => {
  return {
    onSetCookie(payload) {
      dispatch(actions.easySetCookie(payload))
    }
  }
})

const NewSetCookie = hoc(SetCookie)

