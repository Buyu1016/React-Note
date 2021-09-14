import React from 'react';
import ReactDOM from 'react-dom';
import './style/global.css'

// [demo练习切换图片]

const urlList = [
  'http://qiniu.codegorgeous.top/TouXiang.jpg',
  'http://qiniu.codegorgeous.top/top.png'
]
let index = 0
const oRoot = document.getElementById('root')

/**
 * 渲染
 */
function render() {
  ReactDOM.render(
    <img src={getUrl(urlList)} alt="" className="carouselImg" />,
    oRoot
  )
}

/**
 * 获取当次图片地址
 * @param {*} arr 
 * @returns 
 */
function getUrl(arr) {
  index = index % arr.length
  return arr[index++]
}

/**
 * 开启计时器
 * @param {Number} delay 
 */
let timer = null
function startInterval() {
  stopInterval()
  timer = setInterval(() => {
    render()
  }, 1000)
}

/**
 * 停止计时器
 */
function stopInterval() {
  clearInterval(timer)
}

render()

startInterval(1000)

const oImg = document.querySelector('.carouselImg')

oImg.addEventListener('mouseenter', stopInterval)
oImg.addEventListener('mouseleave', startInterval)

