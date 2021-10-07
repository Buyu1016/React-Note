import React, { useState, useEffect } from 'react'
import qs from 'query-string'
import StudentSearch from './Search'
import StudentTable from './Table'
import Page from '../../../../components/Page'
import { getStudent } from '../../../../utils/tools'

export default function StudentList(props) {
    const [resp, setResp] = useState({})
    const [query, setQuery] = useState(getQuery(props.location.search))
    useEffect(() => {
        getStudent(query.sex, query.search, query.page, query.size).then(resp => {
            setResp(resp.data)
        })
    }, [query.sex, query.search, query.page, query.size])

    return (
        <div>
            <div className="student-list-search-container">
                <StudentSearch
                    sex={query.sex}
                    search={query.search}
                    onSearch={(val) => {
                        const newQuery = {
                            ...query,
                            search: val.search,
                            sex: val.sex
                        }
                        const search = qs.stringify(newQuery)
                        props.location.push('?' + search)
                    }}
                />
                <StudentTable list={resp.datas}/>
                <div>
                    <Page
                        current={query.page}
                        total={resp.cont}
                        limit={query.size}
                        onChangePage={(val) => {
                            console.log(val)
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

function getQuery(search) {
    const defaultQuery = {
        page: 1,
        size: 5,
        sex: -1,
        search: ''
    }
    let query = qs.parse(search)
    query = Object.assign({}, defaultQuery, query)
    query.page = +query.page
    query.size = +query.size
    query.sex = +query.sex
    return query
}
