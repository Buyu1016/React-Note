import setPath from './setPath'

const routeConfig = {
    user: {
        path: '/user',
        children: {
            message: {
                path: '/message'
            },
            jurisdiction: {
                path: '/jurisdiction'
            }
        }
    },
    operation: {
        path: '/operation',
        children: {
            search: {
                path: '/search'
            },
            add: {
                path: '/add'
            },
            bag: {
                path: '/bag'
            }
        }
    },
    notFound: {
        path: '/404'
    }
}

setPath(routeConfig)

export default routeConfig
