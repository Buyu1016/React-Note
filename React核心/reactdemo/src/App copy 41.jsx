import React from 'react'
import { BrowserRouter, Switch, Route, Link, NavLink, Redirect } from 'react-router-dom'
// import Link from './components/Link'

export default function App() {

    return (
      <BrowserRouter>
        <Bar />
        <Switch>
          <Route path="/a" component={A}></Route>
          <Route path="/b" component={B}></Route>
          <Redirect to={'/a'}/>
        </Switch>
      </BrowserRouter>
    );
}

function A() {
  return (
    <div>A</div>
  )
}

function B() {
  return (
    <div>B</div>
  )
}

function Bar() {
  return (
    <>
      <NavLink to="/a">{'->A'}</NavLink>
      <NavLink to={{
        pathname: '/b',
        hash: '#aaa',
        search: '?a=1&b=2'
      }}>{'->B'}</NavLink>
      <NavLink to="/c">{'重定向到A'}</NavLink>
    </>
  )
}
