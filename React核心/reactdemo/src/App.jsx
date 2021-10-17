import React from 'react'
import { Link, Route, Switch } from 'react-router-dom';
import { Provider } from './utils/rewriteRedux/react-redux';
import store from './redux'
import { ConnectedRouter } from 'connected-react-router'
import history from './redux/history'

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
              <Route path={'/a'} component={A}/>
              <Route path={'/b'} component={B}/>
            </Switch>
          </div>
        </ConnectedRouter>
      </Provider>
    );
}

function A() {
  return (
    <>A</>
  )
}

function B() {
  return (
    <>B</>
  )
}
