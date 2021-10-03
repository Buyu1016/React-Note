import { useEffect, useState } from "react";
import { getAllStudent } from '../utils/tools'

export function useAllStudent() {
    const [students, setStudents] = useState([])
    useEffect(() => {
        getAllStudent().then(resp => {
            setStudents(resp.data)
        })
    }, [])
    return students
}