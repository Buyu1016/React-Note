import React from 'react'
import { HashRouter, BrowserRouter, Route } from 'react-router-dom'

export default function App() {

    return (
      <BrowserRouter>
        Hello World
        <Route path={"/"} component={C}/>
        <Route path={"/view/a"} component={A}/>
        <Route path={"/view/b"} component={B}/>
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
