import React from 'react';

// 首字母必须大写, 否则React会认为这是个普通的React对象
export function MyFunComponents(props){
    return <h1>Hello React Function Component, {props.number}</h1>
}
