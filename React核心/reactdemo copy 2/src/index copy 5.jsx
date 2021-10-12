import React from 'react';
import ReactDOM from 'react-dom';
import './style/global.css'
import Tick from './components/Tick.jsx'

const oRoot = document.querySelector('#root')

// let num = 3;
// let timer = null

// function start() {
//     timer = setInterval(() => {
//         if (num <= 0) {
//             ReactDOM.render(
//                 <div>
//                    <h1>时间到</h1>
//                 </div>,
//                 oRoot
//             )
//             clearInterval(timer)
//         } else {
//             num--
//             render()
//         }
//     }, 1000)
// }
// render()
// start()

// function render() {
//     ReactDOM.render(
//         <div>
//            <Tick tick={num}/>
//         </div>,
//         oRoot
//     )
// }

ReactDOM.render(
    <div>
        <Tick tick={5}/>
    </div>,
    oRoot
)