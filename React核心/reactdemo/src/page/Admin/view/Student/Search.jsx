import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function StudentSearch(props) {

    const [search, setSearch] = useState(props.search ? props.search : '')
    const [sex, setSex] = useState(props.sex ? props.sex : -1)

    return (
        <div>
            <label>
                关键字: 
                <input
                    type="text"
                    value={search}
                    onChange={(e) => {
                        setSearch(e.target.value)
                    }}
                />
            </label>
            <label>
                不限
                <input
                    type="radio"
                    name="studentSearch"
                    checked={sex === -1}
                    value={-1}
                    onChange={(e) => {
                        setSex(+e.target.value)
                    }}
                />
            </label>
            <label>
                男
                <input
                    type="radio"
                    name="studentSearch"
                    checked={sex === 0}
                    value={0}
                    onChange={(e) => {
                        setSex(+e.target.value)
                    }}
                />
            </label>
            <label>
                女
                <input
                    type="radio"
                    name="studentSearch"
                    checked={sex === 1}
                    value={1}
                    onChange={(e) => {
                        setSex(+e.target.value)
                    }}
                />
            </label>
            <button onClick={() => {
                props.onSearch && props.onSearch({
                    search,
                    sex
                })
            }}>查询</button>
        </div>
    )
}

StudentSearch.propTypes = {
    sex: PropTypes.number,
    search: PropTypes.string
}
