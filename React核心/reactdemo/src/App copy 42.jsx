import React from 'react'
import { BrowserRouter, Switch, Route, Link, NavLink, Redirect } from 'react-router-dom'
import routeConfig from './utils/RouteConfig' 

console.log(routeConfig)

export default function App() {

    return (
      <BrowserRouter>
        <Bar />
        <Switch>
          <Route path={routeConfig.user.path} component={User}/>
          <Route path={routeConfig.operation.path} component={Operation}/>
          <Route path={routeConfig.notFound.path} component={NotFound}/>
          <Redirect to={routeConfig.notFound.path}/>
        </Switch>
      </BrowserRouter>
    );
}

function Bar() {
  return (
    <div>
      <Link to={routeConfig.user.path}>用户</Link>
      <Link to={routeConfig.operation.path}>操作</Link>
    </div>
  )
}

function Bar2() {
  return (
    <div>
      <Link to={routeConfig.user.children.message.path}>用户信息</Link>
      <Link to={routeConfig.user.children.jurisdiction.path}>用户权限</Link>
    </div>
  )
}

function User() {
  return (
    <>
      User
      <Bar2 />
      <Switch>
        <Route path={routeConfig.user.children.message.path} component={Message}/>
        <Route path={routeConfig.user.children.jurisdiction.path} component={Jurisdiction}/>
        <Redirect to={routeConfig.user.children.message.path}/>
      </Switch>
    </>
  )
}

function Message() {
  return (
    <>
      <h1>用户信息:</h1>
      <h2>CodeGorgeous</h2>
      <h2>Coding</h2>
    </>
  )
}

function Jurisdiction() {
  return (
    <>
      <h1>用户权限:</h1>
      <h2>查看</h2>
      <h2>添加</h2>   
    </>
  )
}

function Bar3() {
  return (
    <div>
      <Link to={routeConfig.operation.children.search.path}>查询用户</Link>
      <Link to={routeConfig.operation.children.add.path}>添加用户</Link>
      <Link to={routeConfig.operation.children.bag.path}>礼包</Link>
    </div>
  )
}

function Operation() {
  return (
    <>
      Operation
      <Bar3 />
      <Switch>
        <Route path={routeConfig.operation.children.search.path} component={Search}/>
        <Route path={routeConfig.operation.children.add.path} component={Add}/>
        <Route path={routeConfig.operation.children.bag.path} component={Bag}/>
        <Redirect to={routeConfig.operation.children.search.path}/>
      </Switch>
    </>
  )
}

function Search() {
  return (
    <>
      <input type="text" />
      <button>搜索</button>
    </>
  )
}

function Add() {
  return (
    <>
      用户名: <input type="text" />
      用户权限: <input type="text" />
      <button>添加</button>
    </>
  )
}

function Bag() {
  return (
    <ul>
      <li>礼包1</li>
      <li>礼包2</li>
    </ul>
  )
}

function NotFound() {
  return (
    <h1>404 NotFound</h1>
  )
}
