import { useState } from 'react'

export default function useForceUpdate() {
    const [, setValue] = useState({})
    function forceUpdate() {
        setValue({})
    }
    return forceUpdate
}