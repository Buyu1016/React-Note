const appkey = 'DuYi0120129_1606988685003'
const domain = 'https://open.duyiedu.com'

export function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

export function getNumArray(current, range, totalPage) {
    const min = (current - Math.floor(range/2)) < 1 ? 1 : (current - Math.floor(range/2))
    const max = (min + range - 1) > totalPage ? totalPage : (min + range - 1)
    let arr = []
    for (let i = min; i <= max; i++) {
        arr = [...arr, i]
    }
    return arr
}

/**
 * 分页获取学生数据
 * @param {*} page 
 * @param {*} size 
 * @returns 
 */
export async function getFindByPage(page = 1, size = 5) {
    return await fetch(`${domain}/api/student/findByPage?appkey=${appkey}&page=${page}&size=${size}`, {
        method: 'GET'
    }).then(resp => resp.json())
}

/**
 * 获取所有学生的数据
 * @returns 
 */
export async function getAllStudent() {
    return await fetch(`${domain}/api/student/findAll?appkey=${appkey}`, {
        method: 'GET'
    }).then(resp => resp.json())
}