import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group'
import './style/app.css'

export default function App() {

    return (
      <BrowserRouter>
        <div>
          <Link to="/a">A</Link>
          <Link to="/b">B</Link>
        </div>
        <Route
          path="/a"
          exact
        >
          {({match}) => {
            return <CSSTransition
              in={match ? true : false}
              timeout={3000}
              classNames={{
                enter: 'animated slower bounceInRight',
                exit: 'animated slower bounceOutLeft'
              }}
              // 当进入时才会挂载页面
              mountOnEnter={true}
              // 当退出则销毁组件
              unmountOnExit={true}
            >
              <A />
            </CSSTransition>
          }}
        </Route>
        <Route
          path="/b"
          exact
        >
          {({match}) => {
            return <CSSTransition
              in={match ? true : false}
              timeout={3000}
              classNames={{
                enter: 'animated slower bounceInRight',
                exit: 'animated slower bounceOutLeft'
              }}
              // 当进入时才会挂载页面
              mountOnEnter={true}
              // 当退出则销毁组件
              unmountOnExit={true}
            >
              <B />
            </CSSTransition>
          }}
        </Route>
      </BrowserRouter>
    );
}

function A() {
  return (
    <h1 style={{
      background: 'red'
    }}>A</h1>
  )
}

function B() {
  return (
    <h1 style={{
      background: '#fcc'
    }}>B</h1>
  )
}
