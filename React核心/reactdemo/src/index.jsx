import React from 'react';
import ReactDOM from 'react-dom';
import './style/global.css'
import Page from './components/Page'

const oRoot = document.querySelector('#root')

ReactDOM.render(
    <div>
        <Page current={1} total={11} limit={5} onChangePage={handleChangePage}/>
    </div>,
    oRoot
)

function handleChangePage(val) {
    console.log('当前页:', val)
}