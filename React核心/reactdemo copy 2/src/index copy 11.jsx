import React from 'react';
import ReactDOM from 'react-dom';
import './style/global.css'
import NewLifeBox from './components/NewLifeBox'

const oRoot = document.querySelector('#root')

ReactDOM.render(
    <div>
        <NewLifeBox />
        <NewLifeBox />
    </div>,
    oRoot
)