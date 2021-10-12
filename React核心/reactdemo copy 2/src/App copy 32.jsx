import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import './style/app.css'

export default function App() {
    // const [inProp, setInProp] = useState(false);
    const [toogle, setToogle] = useState(false)
    return (
      <div>
          {/* className可用于自定义动画变换的class名, 例如: my-enter-done  my-exit-done */}
        {/* <CSSTransition in={inProp} timeout={3000} classNames="my" appear>
          <div>
            {"I'll receive my-node-* classes"}
          </div>
        </CSSTransition>
        <button type="button" onClick={() => setInProp(!inProp)}>
          Click to Enter
        </button> */}
        <A toogle={toogle}/>
        <B toogle={!toogle}/>
        <div>
        <button
            onClick={() => {
                setToogle(!toogle);
            }}
        >Change</button>
        </div>
      </div>
    );
}

function A(props) {
    return (
        <CSSTransition
            in={props.toogle}
            timeout={1000}
            classNames={'A'}
        >
            <span>A</span>
        </CSSTransition>
    )
}

function B(props) {
    return (
        <CSSTransition
            in={props.toogle}
            timeout={1000}
            classNames={'A'}
        >
            <span>B</span>
        </CSSTransition>
    )
}