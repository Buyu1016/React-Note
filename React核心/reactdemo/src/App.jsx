import React, { Component } from 'react'
import Carousel from './components/Carousel/index'
export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <div>
                <Carousel data={[
                    "http://qiniu.codegorgeous.top/top.png",
                    "https://img2.baidu.com/it/u=1109821744,1980699124&fm=26&fmt=auto",
                    "http://qiniu.codegorgeous.top/top.png"
                ]}/>
            </div>
        )
    }
}
