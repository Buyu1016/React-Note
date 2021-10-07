import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

export default function App() {

    return (
      <BrowserRouter>
        <Route path={'/'} exact component={A}/>
        {/* path可以使用:用于表示变量, 使用模糊匹配 */}
        {/* ?表示该值可有可无 */}
        {/* *表示任意字符 */}
        <Route path={'/b/:data?/*'} exact component={B}/>
      </BrowserRouter>
    );
}

function A(props) {
  return (
    <>
      Hello A
      <button
        onClick={() => {
          props.history.push('/b/a', {
            name: 'CodeGorgeous'
          })
        }}
      >{'->'} B</button>
    </>
  )
}

function B(props) {
  console.log(props.history.location, props)
  return (
    <>
      Hello B
      <button
        onClick={() => {
          props.history.push('/')
        }}
      >{'-> A'}</button>
    </>
  )
}
