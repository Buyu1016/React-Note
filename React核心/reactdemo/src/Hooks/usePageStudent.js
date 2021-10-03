import { useState, useEffect } from 'react'
import { getFindByPage } from '../utils/tools'

export function useGetPageStudent(page, limit) {
    const [resp, setResp] = useState([])
    useEffect(() => {
        getFindByPage(page, limit).then(resp => {
            setResp(resp.data)
        })
    }, [page, limit])
    return resp
}