import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './style/global.css'
import App from './App'

const oRoot = document.querySelector('#root')

ReactDOM.render((
    <StrictMode>
        <App />
    </StrictMode>
), oRoot)
