import React from 'react';
import ReactDOM from 'react-dom';
import './style/global.css'
import TickTwo from './components/TickTwo'

const oRoot = document.querySelector('#root')

// const btn = <button onClick={click}>click</button>

// function click(e) {
//     console.log('触发', e)
// }

function tickOver() {
    console.log(this, '执行完毕')
}

ReactDOM.render(
    <div>
        <TickTwo num={3} callback={tickOver}/>
    </div>,
    oRoot
)