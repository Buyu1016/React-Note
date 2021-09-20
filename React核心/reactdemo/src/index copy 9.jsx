import React from 'react';
import ReactDOM from 'react-dom';
import './style/global.css'
import Demo from './components/Demo'

const oRoot = document.querySelector('#root')

ReactDOM.render(
    <div>
        <Demo />
        <Demo />
        <Demo />
    </div>,
    oRoot
)