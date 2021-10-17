// 如果用的路由模式为browser则使用createBrowserHistory拿到history
// 如果用的路由模式为hash则使用createHashHistory拿到history
import { createBrowserHistory, createHashHistory } from 'history'

export default createBrowserHistory()