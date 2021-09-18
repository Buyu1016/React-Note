import React from 'react';
import ReactDOM from 'react-dom';
import './style/global.css'

import SphereList from './components/SphereList.jsx'
const oRoot = document.querySelector('#root')

ReactDOM.render(
    <div>
        <SphereList />
    </div>,
    oRoot
)