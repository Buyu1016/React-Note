import React from 'react';
import context from './context';

export default function D(props) {
    const Consumer = context.Consumer
    return (
        <div>
            组件D
            {/* 在函数组件内得到上下文需要使用context.Consumer */}
            <Consumer>
                {value => {
                    return (
                        <>
                            <h1>{value.name}</h1>
                            <h1>{value.sex}</h1>
                            <h1>{value.age}</h1>
                        </>
                    )
                }}
            </Consumer>
        </div>
    )
}
