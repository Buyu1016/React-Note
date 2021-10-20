import React from 'react'
import { connect } from 'umi'

function Home(props) {
    return (
        <div>
            首页
            <button onClick={props.onIncrease}>增加</button>
            <h1>{props.counter}</h1>
            <button onClick={props.onDecrease}>减少</button>
        </div>
    )
}

export default connect(state => state, dispatch => {
    return {
        onIncrease() {
            dispatch({type: 'counter/increase'})
        },
        onDecrease() {
            dispatch({type: 'counter/increase'})
        }
    }
})(Home)
