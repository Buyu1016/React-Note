import React from 'react'
// import { connect } from 'react-redux'
import { connect } from '../../utils/rewriteRedux/react-redux'

function List(props) {
    console.log(props)
    const lis = props.student.map(item => {
        return <li key={item.id}>{item.name} | {item.address}</li>
    })
    return (
        <ul>
            {lis}
        </ul>
    )
}


export default connect(state => state, {})(List)
