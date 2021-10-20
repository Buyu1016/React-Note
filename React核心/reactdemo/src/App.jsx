import React from 'react'
import { Link, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux'
import { ConnectedRouter, push } from 'connected-react-router'
import history from './redux/history'
import { connect } from 'react-redux'

export default function App() {

    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
        <div>
          <nav>
            <Link to={'/a'}>{'to -> A'}</Link>
            <Link to={'/b'}>{'to -> B'}</Link>
          </nav>
          <Switch>
            <Route path={'/a'} component={newA}/>
            <Route path={'/b'} component={B}/>
          </Switch>
        </div>
      </ConnectedRouter>
      </Provider>
    );
}

function A (props) {
  console.log(props)
  return (
    <>
      <h1>A</h1>
      <button onClick={() => {
        props.onClick('/b')
      }}>跳转</button>
    </>
  )
}

const newA = connect(state => state, dispatch => {
  return {
    onClick(payload) {
      dispatch(push(payload))
    }
  }
})(A)

function B () {
  return (
    <h1>B</h1>
  )
}

