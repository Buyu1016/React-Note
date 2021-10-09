import React from 'react'
import { BrowserRouter, Switch, Route, Link, NavLink, Redirect } from 'react-router-dom'
import user from './utils/user'
import ProtectRoute from './components/ProtectRoute'

export default function App() {

    return (
      <BrowserRouter>
        <Bar />
        <Switch>
          <Route path="/login" exact component={Login} />
          <ProtectRoute path="/home" component={Home} />
          <Route path="/journalism" component={Journalism} />
          <Route path="/404" component={NotFound}/>
          <Redirect to="/404"/>
        </Switch>
      </BrowserRouter>
    );
}

function Bar() {
  return (
    <div>
      <Link to="/login">登录</Link>
      <Link to="/home">个人主页</Link>
      <Link to="/journalism">新闻列表</Link>
    </div>
  )
}

function Login(props) {
  return (
    <>
      <button
        onClick={() => {
          user.login(true)
          props.history.push(props.location.state ? props.location.state : '/journalism')
        }}
      >登录</button>
    </>
  )
}

function Home() {
  return (
    <h1>个人主页</h1>
  )
}

function Journalism() {
  return (
    <h1>新闻列表</h1>
  )
}

function NotFound() {
  return (
    <h1>404 NotFound</h1>
  )
}
