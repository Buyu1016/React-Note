import { call } from './index'

export function delay(delayTime = 0) {
    return call(() => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve()
            }, delayTime)
        })
    })
}
