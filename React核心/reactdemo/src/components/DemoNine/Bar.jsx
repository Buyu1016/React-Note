import React, { useState } from 'react'
import { actions } from '../../redux/action/student'
// import { connect } from 'react-redux'
import { connect } from '../../utils/rewriteRedux/react-redux'

function Bar(props) {
    const [word, setWord] = useState('')
    const [sex, setSex] = useState(-1)
    return (
        <div>
            <label>关键词: <input type="text" value={word} onChange={e => setWord(e.target.value)}/></label>
            <label ><input type="radio" checked={sex === -1} value={-1} name={"radio-sex"} onChange={e => setSex(+e.target.value)}/>所有</label>
            <label ><input type="radio" checked={sex === 0} value={0} name={"radio-sex"} onChange={e => setSex(+e.target.value)}/>男</label>
            <label ><input type="radio" checked={sex === 1} value={1} name={"radio-sex"} onChange={e => setSex(+e.target.value)}/>女</label>
            <button onClick={() => {
                props.onSearch && props.onSearch({
                    word,
                    sex
                })
            }}>搜索</button>
        </div>
    )
}

export default connect(null, dispatch => {
    return {
        onSearch(payload) {
            dispatch(actions.fetchSearchStudent(payload))
        }
    }
})(Bar)
