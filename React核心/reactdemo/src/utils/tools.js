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
