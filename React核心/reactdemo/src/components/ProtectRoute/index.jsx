import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import user from '../../utils/user'

export default function ProtectRoute({component:Component, children, render, ...rest}) {
    return (
        <Route {...rest} render={() => {
            if(user.isLogin) {
                return <Component />
            } else {
                return <Redirect to={{
                    pathname: "/login",
                    state: rest.path
                }} />
            }
        }} />
    )
}
