import React from 'react';
import ReactDOM from 'react-dom';
import './style/global.css'

import { MyFunComponents } from './MyFunComponent'
import MyClassComponent from './MyClassComponent'

let num = 1

const MyFunComponent = <MyFunComponents number={num}/>

ReactDOM.render(
    <div>
        { MyFunComponent }
        <MyClassComponent number={num} ui={<h2>Hello PropTypes</h2>}/>
    </div>,
    document.querySelector('#root')
)

async function getAllStudent(appkey) {
    return await fetch('https://open.duyiedu.com/api/student/findAll?appkey=' + appkey, {
        method: 'GET',
    })
    .then(resp => resp.json())
    .then(resp => {
        return resp
    })
}
getAllStudent('DuYi0120129_1606988685003').then(resp => {
    console.log(resp)
})
