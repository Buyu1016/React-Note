import React, { useContext, useState, useEffect } from 'react'
import context from './context'

export default function connect(storeMap, dispatchMap) {
    
    return function(Component) {
        
        return function (props) {
            const newContext = useContext(context)
            const [store, setStore] = useState(newContext.getState())
            let newProps = {}
            if (Object.prototype.toString.call(storeMap) === '[object Function]') {
                newProps['store'] = storeMap(store)
                newContext.subscribe(() => {
                    setStore(newContext.getState())
                    newProps['store'] = storeMap(store)
                })
            }
            if (Object.prototype.toString.call(dispatchMap) === '[object Function]') {
                const result = dispatchMap(newContext.dispatch)
                if (Object.prototype.toString.call(result) === '[object Object]') {
                    newProps = {
                        ...newProps,
                        ...result
                    }
                } else {
                    throw new Error('返回应该是一个对象')
                }
            } else if (Object.prototype.toString.call(dispatchMap) === '[object Object]') {
                for (const key in dispatchMap) {
                    newProps[key] = (payload) => {
                        newContext.dispatch(dispatchMap[key](payload))
                    }
                }
            } else {
                newProps['dispatch'] = newContext.dispatch
            }
            return (
                <>
                    <Component {...props} {...newProps}/>
                </>
            )
        }
    }
}