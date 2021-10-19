import dva from './utils/dva'
import routerConfig from './routerConfig'
import counter from './models/counter'
import user from './models/user'
import logger from 'redux-logger'
// import App from './App'

// 会得到一个dva对象
const app = dva({
    onAction: [],
    extraReducers: {
        // one(state = 0, action) {
        //     console.log(state, action)
        //     return state
        // }
    }
})

app.model(counter)
app.model(user)

app.router(routerConfig)

app.start('#root')

// export default function A() {
//     return (
//         <div>
//             Hello Dva
//         </div>
//     )
// }


