import React from 'react';
import ReactDOM from 'react-dom';
import './style/global.css'
import App from './App'

const oRoot = document.querySelector('#root')

const a = '1'

const app = (
    <div>
        <h1>
            组件App
            {['CodeGorgeous', null, <p>芜湖</p>]}
        </h1>
        <p>{undefined}</p>
        <p>a: {a}</p>
    </div>
)


ReactDOM.render(<App />, oRoot)
// ReactDOM.render(app, oRoot)

console.log(app)
