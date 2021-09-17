# ThreeJs

## 主要步骤: 

### 场景 && 相机 && 渲染器 && 物体

## 相机:

### 相机分为两种: 正交相机和透视相机

#### 正交相机: 遵循客观物体的大小规则, 无论距离该物体有多进或者多远, 该物体的大小始终是一样的, 该相机呈现效果也是一样的, 通过(THREE.OrthographicCamera())创建. [文档](https://threejs.org/docs/?q=OrthographicCamera#api/zh/cameras/OrthographicCamera)

#### 透视相机: 遵循正常人观察物体的方式, 距离该物体近则该物体看起来较大, 反之较小, 该相机呈现的就是这种效果, 通过(THREE.PerspectiveCamera())创建. [文档](https://threejs.org/docs/?q=PerspectiveCamera#api/zh/cameras/PerspectiveCamera)