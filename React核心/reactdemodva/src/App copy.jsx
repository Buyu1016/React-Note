import React from 'react'
import { connect } from 'dva'

export default function App() {
  return (
    <div>
      <NewCounter />
    </div>
  )
}

function Counter(props) {
  return (
    <div>
      <h1>{props.counter}</h1>
      <button onClick={props.onIncrease}>增加</button>
      <button onClick={props.onDecrease}>减少</button>
    </div>
  )
}

const NewCounter = connect(state => {
  return {
    counter: state.counter
  }
}, (dispatch) => {
  return {
    onIncrease: () => dispatch({type: 'counter/increase'}),
    onDecrease: () => dispatch({type: 'counter/decrease'})
  }
} )(Counter)
