
/**
 * 自动分发
 * @param {*} action action对象集合
 * @param {*} dispatch 分发函数
 * @returns 
 */
export function bindActionCreators(action, dispatch) {
    // action为对象的情况
    if (typeof action === 'object') {
        const newObj = {}
        for (const key in action) {
            newObj[key] = (payload) => {
                dispatch(action[key](payload))
            }
        }
        return newObj
    } else if (typeof action === 'function') {
        return (payload) => {
            dispatch(action(payload))
        }
    } else {
        throw new TypeError(`bindActionCreators expected an object or a function, but instead received: ${Object.prototype.toString.call(action)}.`)
    }
    
}