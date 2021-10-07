import React from 'react'
import PropTypes from 'prop-types'
import './index.css'
import { withRouter } from 'react-router'

export default function StudentLayout(props) {

    const NewSide = withRouter(props.side)

    return (
        <div className="student-layout-container">
            <div className="header">{props.header}</div>
            <div className="box-container">
                <div className="side"><NewSide /></div>
                <div className="main">{props.main}</div>
            </div>
        </div>
    )
}

StudentLayout.propTypes = {
    header: PropTypes.element,
    side: PropTypes.func,
    main: PropTypes.element
}
