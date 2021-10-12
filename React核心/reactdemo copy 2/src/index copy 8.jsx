import React from 'react';
import ReactDOM from 'react-dom';
import './style/global.css'
import StudentPage from './components/StudentPage'

const oRoot = document.querySelector('#root')

async function getAllStudent(appkey) {
    return await fetch('https://open.duyiedu.com/api/student/findAll?appkey=' + appkey, {
        method: 'GET',
    })
    .then(resp => resp.json())
    .then(resp => {
        return resp.data
    })
}

async function render() {
    ReactDOM.render(<div>正在加载中ing</div>, oRoot)
    const studentAll = await getAllStudent('DuYi0120129_1606988685003')
    ReactDOM.render(
        <div>
            <StudentPage stuList={studentAll} limit={6}/>
        </div>,
        oRoot
    )
}
render()