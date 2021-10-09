// 模仿vueRoute模式
import User from '../components/DemoEight/User'
import News from '../components/DemoEight/News'
import NewsSearch from '../components/DemoEight/NewsSearch'
import NewsDetail from '../components/DemoEight/NewsDetail'
import Home from '../components/DemoEight/Home'

const routeConfig = [
    {
        path: '/user',
        name: 'User',
        component: User
    }, {
        path: '/news',
        name: 'News',
        component: News,
        children: [
            {
                path: '/search',
                name: 'NewsSearch',
                component: NewsSearch
            }, {
                path: '/detail',
                name: 'NewsDetail',
                component: NewsDetail,
                children: [
                    {
                        path: '/my',
                        component: Home
                    }
                ]
            }
        ]
    }, {
        path: '/home',
        name: 'Home',
        component: Home
    }
]

export default routeConfig
