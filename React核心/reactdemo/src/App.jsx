import React, { useState } from 'react'
import { SwitchTransition, CSSTransition } from 'react-transition-group'
import './style/app.css'

export default function App() {
    
    const [lock, setLock] = useState(false)

    return (
      <div>
          {/* SwitchTransition需要和CSSTransition配合使用, CSSTransition不需要传递属性in, 需要传递属性key */}
          {/* 元素变化过程(key值变化):
                exit,exit-active
                移除DOM
                重新渲染新的DOM
                enter,enter-active
                enter-done
          */}
          {/* SwitchTransition有属性为mode, 用于定于元素的变换形式: 默认out-in先退出后进入, in-out先进入后退出 */}
          <SwitchTransition mode={"out-in"}>
              <CSSTransition
                appear
                timeout={1000}
                key={lock}
                classNames={{
                    exit: "animate__bounceOutDown",
                    enter: "animate__bounceIn"
                }}
              >
                <h1 className="animated fast">{lock ? 'A' : 'B'}</h1>
              </CSSTransition>
          </SwitchTransition>
          <button
            onClick={() => {
                setLock(!lock);
            }}
          >Click</button>
      </div>
    );
}
