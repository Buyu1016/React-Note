const appkey = 'DuYi0120129_1606988685003'

export async function getAllStudent() {
    return await fetch('/api/student/findAll?appkey=' + appkey).then(resp => resp.json()).then(resp => {
        return {
            count: resp.data.length,
            datas: resp.data
        }
    })
}