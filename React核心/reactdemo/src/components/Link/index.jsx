import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

function Link(props) {
    return (
        <a
            href={props.to}
            onClick={(e) => {
                e.preventDefault()
                if (props.replace) {
                    props.history.replace(props.to)
                } else {
                    props.history.push(props.to)
                }
            }}
        >
            {props.children}
        </a>
    )
}

Link.propTypes = {
    to: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
    ]).isRequired,
    replace: PropTypes.bool
}

Link.defaultProps = {
    replace: false
}

export default withRouter(Link)
