import { run } from './run'
import channel from './effects/channel'

export default function createSagaMiddleware () {
    return function sagaMiddleware (store) {
        const env = {
            store,
            channel
        }
        
        // 
        sagaMiddleware.run = run.bind(null, env)
        return  dispatch => {
            return  action => {
                const result = dispatch(action)
                env.channel.put(result.type, result)
                return result
            }
        }
    }
}
