import React from 'react';
import App from './App'
import Sign from './components/Sign'
import { Link, Route, Switch, routerRedux, BrowserRouter } from  './utils/dva/router'

export default function Router (props) {
    console.log(props)
    return (
        <routerRedux.ConnectedRouter history={props.history}>
            <div>
                <nav>
                    <Link to={'/'} >{'to /'}</Link>
                    ---
                    <Link to={'/sign'} >{'to Sign'}</Link>
                </nav>
                <Switch>
                    <Route path={'/'} exact component={App} />
                    <Route path={'/sign'} exact component={Sign} />
                </Switch>
            </div>
        </routerRedux.ConnectedRouter>
    )
}