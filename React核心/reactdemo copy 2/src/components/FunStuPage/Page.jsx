import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import './Page.css'
import { getNumArray } from '../../utils/tools'

export default function Page(props) {

    const [page, setPage] = useState([])

    useEffect(() => {
        // setPage(getNumArray(props.current, props.limit, props.total))
    }, [page])

    const newPageList = page.map(item => {
        return (
            <span
                key={item}
                className={props.current === item ? 'item active' : 'item'}
                onClick={(item) => {
                    console.log(item)
                }}
            >
            {item}
            </span>
        )
    })

    return (
        <div>
            <button
                className={props.current === 0 ? 'item disabled' : 'item'}
                onClick={() => {
                    props.onChangePage(0)
                }}
            >首页</button>
            <button
                className={Math.ceil(props.total/props.limit) === props.current ? 'item disabled' : 'item'}
                onClick={() => {
                    props.onChangePage(props.current - 1)
                }}
            >上一页</button>
            {}
            <button
                className={Math.ceil(props.total/props.limit) === props.current ? 'item disabled' : 'item'}
                onClick={() => {
                    props.onChangePage(props.current + 1)
                }}
            >下一页</button>
            <button
                className={Math.ceil(props.total/props.limit) === props.current ? 'item disabled' : 'item'}
                onClick={() => {
                    props.onChangePage(Math.ceil(props.total/props.limit))
                }}
            >尾页</button>
        </div>
    )
}

Page.propTypes = {
    total: PropTypes.number.isRequired,
    current: PropTypes.number.isRequired,
    limit: PropTypes.number.isRequired,
    onChangePage: PropTypes.func.isRequired,
}
