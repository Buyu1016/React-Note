import { v4 } from 'uuid'
/**
 * 
 * @param { Function } reducer reducer
 * @param { any } initialValue 初始值
 * @param { Function } middleware
 * @returns 
 */
export function createStore(reducer, initialValue, middleware) {
    // 中间件
    let middlewareFn = middleware;
    if (Object.prototype.toString.call(initialValue) === '[object Function]') {
        middlewareFn = initialValue
        initialValue = undefined
    }
    // 仓库数据
    let storeValue = initialValue
    // 判断传入的中间件是否为一个函数
    if (Object.prototype.toString.call(middlewareFn) === '[object Function]') {
        return middlewareFn(createStore)(reducer, storeValue)
    }
    // 监听器集合
    let watchList = []
    function dispatch(action) {
        
        // 验证action是否为对象
        if (Object.prototype.toString.call(action) !== '[object Object]') {
            throw new Error(`Actions must be plain objects. Instead, the actual type was: ${Object.prototype.toString.call(action)}. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. `)
        }
        // 判断action是否为一个平面对象
        if (action.__proto__ === Object.prototype) {
           // 判断action对象中是否具有type属性 
           if (!action.hasOwnProperty('type')) {
               throw new Error(`Actions may not have an undefined "type" property. You may have misspelled an action type string constant.`)
           }
        } else {
            throw new Error('Action should be a flat object')
        }
        // 到这一步就表示了action没问题
        // 运行reducer
        storeValue = reducer(storeValue, action)

        // 运行监听器
        for (const iterator of watchList) {
            iterator()
        }
    }

    // 在创建仓库的时候应调用一次reducer
    dispatch({type: `@@redux/${v4()}`})
    function getState() {
        return storeValue
    }

    function subscribe(callback) {
        watchList.push(callback)
        return function () {
            watchList = watchList.filter(item => item !== callback)
        }
    }

    return {
        dispatch,
        getState,
        subscribe
    }
}