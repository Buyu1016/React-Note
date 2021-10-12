import React from 'react';
import ReactDOM from 'react-dom';

const a = 10, b = 11
const obj = {
  a: 1,
  b: 2,
  print() {
    return <h1>Hello React</h1>
  }
}
// 显示数组的时候也需要绑定key
const arr = [<h2 key="1">Hello CodeGorgeous</h2>]
const url = 'http://qiniu.codegorgeous.top/top.png'
const img = (
  // class需写成className
  // style必需使用表达式, 表达式内容为对象
  <img
    src={url} alt=""
    className="img-huojian"
    style={{
      border: '1px solid red'
  }}/>
)
const content = '<h1>芜湖起飞</h1>'
ReactDOM.render(
  <div>
    {/* 这是React的注释方式 */}
    {/* null/undefined/false在表达式内是不会显示的, 也不会产生相应的对应元素 */}
    {a} ^ {b} = {null}{undefined}{false}
    {/* 普通对象不行, 只能放置React对象 */}
    {obj.print()}
    {arr}
    {img}
    {/* dangerouslySetInnerHTML主要提醒自己当前为注入操作, 此操作比较危险, 如果必须这么做则需要{{__html: 内容}} */}
    <div dangerouslySetInnerHTML={{
      __html: content
    }}></div>
  </div>,
  document.getElementById('root')
);


