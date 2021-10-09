export default function setPath(obj, baseUrl='') {
    for (const key in obj) {
        for (const key1 in obj[key]) {
            const url1 = obj[key].path
            if (key1 === 'children') {
                setPath(obj[key].children, url1)
            } else if (key1 === 'path') {
                obj[key].path = baseUrl + obj[key].path
            }
        }
    }
}