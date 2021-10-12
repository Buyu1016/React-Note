import React from 'react'
import { CSSTransition } from 'react-transition-group'
import './index.css'

export default function FadeTransition(props) {
    return (
        <CSSTransition
            {...props}
            classNames={"fade"}
            onEnter={(node) => {
                node.style.transition = `opacity ${props.timeout}ms`
            }}
            onEntered={(node) => {
                node.style.transition = ""
            }}
            onExit={(node) => {
                node.style.transition = `opacity ${props.timeout}ms`
            }}
            onExited={(node) => {
                node.style.transition = ""
            }}
        >
           {props.children}
        </CSSTransition>
    )
}

FadeTransition.defaultProps = {
    timeout: 3000
}
