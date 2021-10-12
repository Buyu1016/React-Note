import React from 'react';

const context = React.createContext({
    name: 'CodeGorgeous',
    sex: 'male',
    age: 21
})

/**
 * context有两个属性:
 *  Provider: 生产者, 是一个组件, 用于创建上下文, 其有value属性用于设置上下文数据
 *  Consumer: 消费者, 
 */

export default context