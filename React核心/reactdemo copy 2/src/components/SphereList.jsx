import React, { Component } from 'react'
import Sphere from './Sphere.jsx'
import { getRandom } from '../utils/getRandom'

export default class SphereList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sphereInfoList: [],
        }
        this.timer = setInterval(() => {
            const info = {
                size: getRandom(10, 200),
                speed: getRandom(1, 10),
                left: getRandom(0, window.innerWidth),
                top: getRandom(0, window.innerHeight),
                background: `rgb(${getRandom(0, 255)},${getRandom(0, 255)},${getRandom(0, 255)})`
            }
            this.setState({
                sphereInfoList: [...this.state.sphereInfoList, info]
            })
            if (this.state.sphereInfoList.length >= 10) {
                clearInterval(this.timer)
            }
        }, 2000)
    }
    render() {
        const list = this.state.sphereInfoList.map((item, index) => {
            return <Sphere {...item} key={index} />
        })
        return (
            <>
                {list}
            </>
        )
    }
}
