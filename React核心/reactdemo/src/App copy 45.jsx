import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom';
import RouteWatch from './components/RouteWatch'

export default function App() {

    return (
      <BrowserRouter
        // 在这里会接收到自己所设置的路由
        // val阻塞的信息
        // callback回调,true表示正常跳转, false则反之
        // getUserConfirmation={(val, callback) => {
        //   callback(val)
        // }}
      >
        <div>
          <Link to="/a">A</Link>
          <Link to="/b">B</Link>
        </div>
        <RouteWatch
          onChange={(location, action, prevLocation) => {
            console.log(location, action, prevLocation);
          }}
        >
          <Route path="/a" component={A}/>
          <Route path="/b" component={B}/>
        </RouteWatch>
      </BrowserRouter>
    );
}

function A() {
  return (
    <h1>A</h1>
  )
}

function B() {
  return (
    <h1>B</h1>
  )
}
