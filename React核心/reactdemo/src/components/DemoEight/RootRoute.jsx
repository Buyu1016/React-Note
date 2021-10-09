import React from 'react'
import { Switch, Route } from 'react-router-dom'
import routeConfig from '../../route/index'


export default function RootRoute() {
    const list = getRouteReacts(routeConfig)
    return (
        <div>
            {list}
        </div>
    )
}

function getRouteReacts(routes, basePath="") {
    const routeList = routes.map((item, index) => {
        const { children, path, component:Component, ...rest } = item
        return <Route
                    {...rest}
                    path={basePath + path}
                    key={index}
                    render={(values) => {
                        if (children) {
                            return <Component {...values}>
                                {getRouteReacts(children, basePath + path)}
                            </Component>
                        } else {
                            return <Component />
                        }
                    }}
                />
    })
    return (
        <Switch>
            {routeList}
        </Switch>
    )
}
