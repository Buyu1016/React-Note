import React from 'react';
import MyClassComponent from './MyClassComponent'
// 首字母必须大写, 否则React会认为这是个普通的React对象
export function MyFunComponents(){
    return <h1>Hello React Function Component, <MyClassComponent/></h1>
}
