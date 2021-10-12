import React from 'react';
import ReactDOM from 'react-dom';
import './style/global.css'
import Test from './components/Mantle/Test'

const oRoot = document.querySelector('#root')

ReactDOM.render(
    <div>
        <h1>Hello React</h1>
        <Test />
    </div>,
    oRoot
)