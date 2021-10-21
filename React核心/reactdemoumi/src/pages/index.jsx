import React from 'react'
import { connect } from 'umi'
import globalStyle from '@/assets/css/global.css'

function Home(props) {
    return (
        <div>
            首页
            <button className={globalStyle['button-style']} onClick={props.onIncrease}>增加</button>
            <h1>{props.counter}</h1>
            <button className={globalStyle['button-style']} onClick={props.onDecrease}>减少</button>
            <button
                onClick={props.onAsyncSetStudent}
            >获取数据</button>
        </div>
    )
}

export default connect(state => state, dispatch => {
    return {
        onIncrease() {
            dispatch({type: 'counter/increase'})
        },
        onDecrease() {
            dispatch({type: 'counter/decrease'})
        },
        onAsyncSetStudent() {
            dispatch({type: 'student/asyncSetStudent'})
        }
    }
})(Home)
