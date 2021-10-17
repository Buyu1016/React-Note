import React, { useState } from 'react'
import { Provider, connect } from 'react-redux';
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
    </div>
  )
}

// const hoc = connect((state) => {
//   console.log(state)
//   return state
// }, dispatch => {
//   return {
//     onSetCookie(payload) {
//       dispatch(actions.easySetCookie(payload))
//     }
//   }
// })

// 第二个参数为对象的情况
const hoc = connect((state) => state, {
  onSetCookie: actions.easySetCookie,
})

const NewSetCookie = hoc(SetCookie)
