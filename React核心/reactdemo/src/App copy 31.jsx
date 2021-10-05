import React, { useState } from 'react'
import { Transition } from 'react-transition-group';
import './style/app.css'

// const duration = 300;

// 样式
// const defaultStyle = {
//   transition: `all ${duration}ms ease-in-out`,
//   color: 'red'
// }

// // 动画的四个阶段
// const transitionStyles = {
//   entering: { color: 'red' },
//   entered:  { color: 'red' },
//   exiting:  { color: 'black' },
//   exited:  { color: 'black' },
// };

export default function App() {
    const [inProp, setInProp] = useState(false);
    return (
      <div>
        <Transition
            in={inProp}
            timeout={500}
            // unmountOnExit该属性会卸载元素, 每当元素的state为exited就会卸载元素
            // unmountOnExit
            // 在xxxxed状态执行
            //  node: 节点
            //  done: 回调函数, 调用回调函数会跳过等待变为xxxed状态的时间, 会直接变为xxxed(无需等待)
            addEndListener={(node, done) => {
                console.log(node, done)
                // done()
            }}
        >
            {state => {
                console.log(state)
                return (
                    <div className={state}>
                        I'm a fade Transition!
                    </div>
                )}
            }
        </Transition>
        <button onClick={() => setInProp(!inProp)}>
          Click to Enter
        </button>
      </div>
    );
  }