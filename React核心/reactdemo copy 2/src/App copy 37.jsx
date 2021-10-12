import React from 'react'
import { HashRouter, BrowserRouter, Route, Switch } from 'react-router-dom'

export default function App() {

    return (
      <BrowserRouter>
        Hello World
        <Switch>
          <Route path={"/"} exact component={C}>
            <h1>毛毛永远的好闺蜜</h1>
          </Route>
          <Route path={"/a"} exact component={A}/>
          <Route path={"/a/b"} exact component={B}/>
          <Route component={NotFound}/>
        </Switch>
      </BrowserRouter>
    );
}

// /view/a
function A() {
  return (
    <div>
      Hello A
    </div>
  )
}

// /view/b
function B() {
  return (
    <div>
      Hello B
    </div>
  )
}

// /
function C() {
  return (
    <div>
      Hello C
    </div>
  )
}

function NotFound() {
  return (
    <div>
      <h1>404 NotFound</h1>
      <h2>您查找的页面不存在</h2>
    </div>
  )
}
