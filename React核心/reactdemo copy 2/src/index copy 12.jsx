import React from 'react';
import ReactDOM from 'react-dom';
import './style/global.css'
import DemoTwo from './components/DemoTwo'

const oRoot = document.querySelector('#root')

ReactDOM.render(
    <div>
        <DemoTwo html={<h1>Hello World!</h1>} ><h1>Hello React!1</h1><h1>Hello React!2</h1></DemoTwo>
    </div>,
    oRoot
)