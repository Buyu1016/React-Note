const channel = {
    // 监听器集合
    listeners: {},
    // 向监听器集合内添加监听
    take(prop, func) {
        if (this.listeners[prop]) {
            this.listeners[prop].push(func)
        } else {
            this.listeners[prop] = [func]
        }
    },
    // 触发监听器内相应的监听函数, 并在触发后进行移除
    put(prop, ...args) {
        if (this.listeners[prop]) {
            for (const func of this.listeners[prop]) {
                func(...args)
            }
            // 移除掉运行过的监听
            delete this.listeners[prop]
        }
    }
}

export default channel