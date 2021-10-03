import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Page from './Page'
import Student from './Student'
import { getFindByPage } from '../../utils/tools'

export default function StudentList(props) {

    const [list, setList] = useState([])
    const [total, setTotal] = useState(0)
    const [current, setCurrent] = useState(1)
    const [limit, setLimit] = useState(1)

    useEffect(() => {
        getFindByPage().then(resp => {
            setList(resp.data.findByPage)
            setTotal(resp.data.cont)
        })
    }, [current])

    const reactList = list.map(item => {
        return <Student {...item}/>
    })

    return (
        <div>
            {reactList}
            <Page
                total={101}
                current={3}
                limit={10}
                onChangePage={(val) => {
                    console.log(val)
                }}
            />
        </div>
    )
}

StudentList.propTypes = {
    page: PropTypes.number.isRequired,
    size: PropTypes.number.isRequired,
}

StudentList.defaultProps = {
    page: 1,
    size: 5
}
