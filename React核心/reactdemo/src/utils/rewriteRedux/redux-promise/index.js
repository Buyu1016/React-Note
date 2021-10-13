/* eslint import/no-anonymous-default-export: off */
import { isPlainObject, isString } from 'lodash'

export default function(store) {
    return (dispatch) => {
        return (action) => {
            // 判断action是否为一个标准的flux的action
            if(isFluxAction(action)) {
                if (action.payload.__proto__ === Promise.prototype) {
                    action.payload.then(resp => {
                        return dispatch({
                            ...action,
                            payload: resp
                        })
                    }).catch((err) => {
                        return dispatch({
                            ...action,
                            payload: err,
                            error: true
                        })
                    })
                } else {
                    return dispatch(action)
                }
            } else {
                if (action.__proto__ === Promise.prototype) {
                    action.then(resp => {
                        return dispatch(resp)
                    }).catch(err => {
                        return dispatch({
                            ...action,
                            payload: err,
                            error: true
                        })
                    })
                } else {
                    throw new Error(`Actions must be plain objects. Instead, the actual type was: '${Object.prototype.toString.call(action)}'. You may need to add middleware to your store setup to handle dispatching other values`)
                }
            }
        }
    }
}

function isFluxAction(action) {
    return isPlainObject(action) && isString(action.type) && Object.keys(action).every(item => ['type', 'payload', 'error', 'meta'].includes(item))
}
