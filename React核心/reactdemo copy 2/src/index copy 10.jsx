import React from 'react';
import ReactDOM from 'react-dom';
import './style/global.css'
import OldLifeBox from './components/OldLifeBox'

const oRoot = document.querySelector('#root')

ReactDOM.render(
    <div>
        <OldLifeBox />
        <OldLifeBox />
    </div>,
    oRoot
)