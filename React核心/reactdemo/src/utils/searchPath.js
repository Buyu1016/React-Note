import routeConfig from '../route/index'

export default function searchPath(name, basePath='', route=routeConfig) {
    for (const iterator of route) {
        if (iterator.name === name) {
            return basePath + iterator.path
        } else if (iterator.children) {
            const path = searchPath(name, basePath + iterator.path, iterator.children)
            if (path) {
                return path
            }
        }
    }
}