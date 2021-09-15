import React from 'react';
import ReactDOM from 'react-dom';
import './style/global.css'

import { MyFunComponents } from './MyFunComponent'
import MyClassComponent from './MyClassComponent'

const MyFunComponent = <MyFunComponents/>

ReactDOM.render(
    <div>
        { MyFunComponent }
        <MyClassComponent/>
    </div>,
    document.querySelector('#root')
)