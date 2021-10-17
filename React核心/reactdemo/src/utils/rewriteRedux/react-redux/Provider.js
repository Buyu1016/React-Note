import React from 'react'
import PropTypes from 'prop-types'
import context from './context'

export default function Provider(props) {
    return (
        <context.Provider value={props.store}>
            {props.children}
        </context.Provider>
    )
}

Provider.propTypes = {
    store: PropTypes.object.isRequired
}

