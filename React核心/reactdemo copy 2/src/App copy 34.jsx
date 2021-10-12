import React, { useState } from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import './style/app.css'
// import uuid from 'uuid'

export default function App() {
    
    const [list, setList] = useState([
      { id: 1, name: '任务一' },
      { id: 2, name: '任务二' }
    ])

    return (
      <div>
          <TransitionGroup>
            {list.map(item => {
              return (
                <CSSTransition
                  timeout={5000}
                  key={item.id}
                  classNames={{
                    exit: 'animate__bounceOut'
                  }}
                >
                  <div
                    style={{
                      display: 'inline-block'
                    }}
                  >
                    {item.name}
                    <button
                      onClick={() => {
                        setList(list.filter(it => it.id !== item.id))
                      }}
                    >完成</button>
                  </div>
                </CSSTransition>
              )
            })}
          </TransitionGroup>
      </div>
    );
}
