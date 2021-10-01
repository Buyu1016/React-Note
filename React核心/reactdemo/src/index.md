# JSX

## 规范要求: 

### 遵守XML规范, 标签必须有结束符号, 只允许存在一个根节点

## JSX表达式语法: <div>{表达式/变量}</div>

### JSX语法表达式无法展示出undefined/null/false

## 元素不可变

# 组件

## 函数组件和类组件

### 函数组件: 必须返回一个React对象

### 类组件: 必须有继承自React.Component, 必须有render()方法

## 传递参数

### 函数组件会以一个对象形式位于函数的第一个参数位置

### 类组件会以一个对象形式位于constructor的第一个参数位置

#### **组件无法改变自身属性**

# 受控组件和非受控组件

## 受控组件: 组件使用者有能力控制该组件的行为和内容, 通常该种组件无自身状态

## 非受控组件: 组件使用者没有能力控制组件的行为和内容, 组件内的行为和内容由其组件状态自行控制维护

# **注意: React思想: 数据属于谁, 谁才能有权力进行改变**

## **React中的数据都遵循单向数据流**

# 组件状态

## 组件可以自行维护的数据(组件状态只能在类组件中有效)

# 状态的变化

# 事件

## 在该标签中写入属性onXxx(小驼峰命名法), 值为函数

# 深入理解setState

## setState是异步的, 会和自己设想中的流程产生差异
## setState的第一个参数可以为函数, 函数返回对象为最终值, 第二个参数为回调函数

### 永远不要新人setState调用后某个state的状态, 如果需要state的状态则使用setState的回调函数

### 如果连续改变某个state, 则统一setState第一个参数使用函数而不是对象

# 生命周期

## 有两个版本的生命周期: 旧版生命周期: 16.0.0之前  新版生命周期: 16.0.0之后

### 旧版生命周期:

```
// *********初始化阶段开始*********
    1、constructor阶段
        1) 同一个组件只会创建一次
        2) 不能再第一次挂在到页面之前调用setState, 构造函数的constructor中严禁使用setState
// *********初始化阶段结束*********
// *********挂载阶段开始*********
    2、componentWillMount阶段
        1) 此阶段表示元素即将挂载
        2) 正常情况下只会运行一次
        3) 此阶段仍然禁止使用setState, 因为在一些特殊情况下会被调用多次, 产生bug
    3、render阶段
        1) 此阶段表示React元素被挂载到虚拟DOM树上
        2) 此阶段严禁使用setState, 因为可能会导致递归循环渲染
    4、componentDidMount阶段
        1) 此阶段表示元素正式挂载
        2) 此阶段只会执行一次
        3) 可以使用setState
        4) 通常会将一些初始化操作放置到该函数中
// *********挂载阶段结束*********
// *********更新阶段开始*********
    5、componentWillReceiveProps阶段
        1) 此阶段表示props即将变化前, 参数一为即将变化的值
        2) 该钩子在新版本生命周期时候移除掉了
    6、shouldComponentUpdate阶段
        1) 此阶段表示props/state发生变化的时候
        2) 此阶段能够操控是否重新渲染该组件, 函数返回true为重新渲染(默认), false则反之
        3) 通常会在该函数中写性能优化
    7、componentWillUpdate阶段
        1) 此阶段表示即将重新渲染组件(前提条件: shouldComponentUpdate阶段返回true)
    8、render阶段(和上面那个render做相同的事情)
    9、componentDidUpdate阶段
        1) 此阶段表示虚拟DOM已经重新挂载到页面上了
        2) 通常会把DOM操作放在该函数中
// *********更新阶段结束*********
// *********销毁阶段开始*********
    10、componentWillUnmount阶段
        1) 此阶段表示组件被销毁
        2) 通常会把依赖的一些资源或者事件进行清除操作, 例如: 计时器||事件模型
// *********销毁阶段结束*********
```

### 新版生命周期:

```
// *********初始化阶段开始*********
    1、constructor阶段
        1) 同一个组件只会创建一次
        2) 不能再第一次挂在到页面之前调用setState, 构造函数的constructor中严禁使用setState
// *********初始化阶段结束*********
// *********挂载阶段开始*********
    2、getDerivedStateFromProps阶段
        1) 此阶段表示props/state发生变化
        2) 此方法在开始就会运行一次
        3) 此方法为静态(static)方法
        4) 必须返回一个值, 返回值会覆盖当前组件的状态
    3、render阶段
        1) 此阶段表示React元素被挂载到虚拟DOM树上
        2) 此阶段严禁使用setState, 因为可能会导致递归循环渲染
    4、componentDidMount阶段
        1) 此阶段表示元素正式挂载
        2) 此阶段只会执行一次
        3) 可以使用setState
        4) 通常会将一些初始化操作放置到该函数中
// *********挂载阶段结束*********
// *********更新阶段开始*********
    5、getDerivedStateFromProps阶段
        1) 此阶段表示props/state发生变化
        2) 此方法在开始就会运行一次
        3) 此方法为静态(static)方法
        4) 必须返回一个值, 返回值会覆盖当前组件的状态
    6、shouldComponentUpdate阶段
        1) 此阶段表示props/state发生变化的时候
        2) 此阶段能够操控是否重新渲染该组件, 函数返回true为重新渲染(默认), false则反之
        3) 通常会在该函数中写性能优化
    7、render阶段(和上面那个render做相同的事情)
    8、getSnapshotBeforeUpdate阶段
        1) 此阶段表示真实DOM已经构建完成, 但还未挂载到页面上
        2) 通常会把附加的DOM操作放在该函数中
        3) 该函数必须有返回值, 返回的值会作为componentDidUpdate阶段函数的第三个参数出现
    9、componentDidUpdate阶段
        1) 此阶段表示DOM已经重新挂载到页面上了
        2) 通常会把DOM操作放在该函数中
// *********更新阶段结束*********
// *********销毁阶段开始*********
    10、componentWillUnmount阶段
        1) 此阶段表示组件被销毁
        2) 通常会把依赖的一些资源或者事件进行清除操作, 例如: 计时器||事件模型
// *********销毁阶段结束*********
```

# 传递元素

## 组件写为对标签, 在对标签内的内容会以props.children传递到子组件内

# 表单

## 表单组件默认为非受控组件

# 属性默认值

## 类组件使用 static defaultProps = {}; 函数组件使用构造函数.defaultProps = {};

# 类型检查

## 需使用官方提供的第三方库prop-types

### **prop-types**提供的类型

```
// 传入undefined/null是无法通过必填选项的
// 默认情况下，这些都是可选的。
  optionalArray: PropTypes.array, // 数组
  optionalBool: PropTypes.bool, // 布尔值
  optionalFunc: PropTypes.func, // 函数
  optionalNumber: PropTypes.number, // 数字
  optionalObject: PropTypes.object, // 对象
  optionalString: PropTypes.string, // 字符串
  optionalSymbol: PropTypes.symbol, // symbol

  // 任何东西都可以被渲染:numbers, strings, elements,或者是包含这些类型的数组(或者是片段)。
  optionalNode: PropTypes.node,

  // 一个 React 元素。
  optionalElement: PropTypes.element,

  // 你也可以声明一个 prop 是类的一个实例。 
  // 使用 JS 的 instanceof 运算符。
  optionalMessage: PropTypes.instanceOf(Message),

  // 你可以声明 prop 是特定的值，类似于枚举
  optionalEnum: PropTypes.oneOf(['News', 'Photos']),

  // 一个对象可以是多种类型其中之一
  optionalUnion: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.instanceOf(Message)
  ]),

  // 一个某种类型的数组
  optionalArrayOf: PropTypes.arrayOf(PropTypes.number),

  // 属性值为某种类型的对象
  optionalObjectOf: PropTypes.objectOf(PropTypes.number),

  // 一个特定形式的对象
  optionalObjectWithShape: PropTypes.shape({
    color: PropTypes.string,
    fontSize: PropTypes.number
  }),

  // 你可以使用 `isRequired' 链接上述任何一个，以确保在没有提供 prop 的情况下显示警告。
  requiredFunc: PropTypes.func.isRequired,

  // 任何数据类型的值
  requiredAny: PropTypes.any.isRequired,

  // 你也可以声明自定义的验证器。如果验证失败返回 Error 对象。不要使用 `console.warn` 或者 throw ，
  // 因为这不会在 `oneOfType` 类型的验证器中起作用。
  customProp: function(props, propName, componentName) {
    if (!/matchme/.test(props[propName])) {
      return new Error(
        'Invalid prop `' + propName + '` supplied to' +
        ' `' + componentName + '`. Validation failed.'
      );
    }
  }
```

# HOC 告诫组件

## HOC(Higher-Order Component), 高阶组件, 以组件作为参数, 并返回一个组件

## 通常可以利用HOC实现横切关注点

# ref

## 标签添加属性ref即可, 想要获取该ref标记的元素使用this.refs.ref值, 即可拿到ref标记的元素， ref的参数可以是字符串(不建议使用, 将来有可能弃用)/函数/对象

## ref也可以拿到类的实例

# ref转发

## React.forwardRef()处理函数组件无法使用ref问题

## 使用方式及其限制: React.forwardRef(函数组件), 函数组件的构造函数会收到第二个参数ref, 用于定义该函数组件内的ref值。此函数只能用于函数组件上

# Context(上下文)

## React < 16.0.0为旧版, React > 16.0.0为新版

## 当某个组件创建了上下文后, 上下文的数据会被子组件所共享。 如果某个组件依赖了上下文，会导致该组件不存粹。 一般用于第三方组件

### 旧版Context接口:

```
    export default class A extends Component {
    constructor(props) {
        super(props)
        this.state = {
            uid: '0120129',
            name: 'CodeGorgeous',
        }
    }
    // 规定上下文数据类型
    static childContextTypes = {
        uid: PropTypes.string,
        name: PropTypes.string
    }
    // 设置上下文数据
    // 该函数自动在render阶段后调用
    getChildContext() {
        return {
            uid: this.state.uid,
            name: this.state.name
        }
    }

    render() {
        return (
            <div>
                组件A
                <B />
            </div>
        )
    }

    // ******
    export default class C extends Component {
    constructor(props, context) {
        super(props)
        this.state = {}
        console.log(context) // {uid: '0120129', name: 'CodeGorgeous'}
    }
    // 必须重新明确上下文数据类型
    static contextTypes = {
        uid: PropTypes.string,
        name: PropTypes.string
    }

    render() {
        return (
            <div>
                组件C
                <h1>{this.context.uid}</h1>
                <h2>{this.context.name}</h2>
            </div>
        )
    }
}
}
```

## 新版Context接口:

### 新版本的Context将独立组件外, 多文件组件模式需要把context抽离出来, 不需要在声明类型

```
    // ***context.js***

    import React from 'react';

    const context = React.createContext({
        name: 'CodeGorgeous',
        sex: 'male',
        age: 21
    })

    /**
    * context有两个属性:
    *  Provider: 生产者, 是一个组件, 用于创建上下文, 其有value属性用于设置上下文数据
    *  Consumer: 消费者, 是一个组件, 用于获取上下文数据的一种方式, 通常在函数组件内使用该种方式获取上下文数据(类组件内也可以使用)
    *  要求使用Consumer这种方式获取上下文数据
    */

    export default context

    // ***A.jsx***

    import React, { Component } from 'react'
    import B from './B'
    import context from './context'

    // 通过context创建, React.createContext参数为数据默认值
    // 多文件需要把这个提取出来为一个文件
    // const context = React.createContext({
    //     name: 'CodeGorgeous',
    //     sex: 'male',
    //     age: 21
    // })

    export default class A extends Component {
        render() {
            const Provider = context.Provider
            return (
                <div>
                    {/* 通过设置value来设置上下文 */}
                    <Provider value={{
                        name: 'maomao',
                        sex: 'female',
                        age: 18
                    }}>
                        组件A
                        <B />
                    </Provider>
                </div>
            )
        }
    }

    // ***B.jsx***

    import React, { Component } from 'react'
    import C from './C'
    import context from './context'

    export default class B extends Component {
        render() {
            const Consumer = context.Consumer
            return (
                <Consumer>
                    {value => {
                        return (
                            <>
                                <div>
                                    组件B
                                    <h1>{value.name}</h1>
                                    <h1>{value.sex}</h1>
                                    <h1>{value.age}</h1>
                                    <C />
                                </div>
                            </>
                        )
                    }}
                </Consumer>
            )
        }
    }

    // ***C.jsx***

    import React, { Component } from 'react'
    import context from './context'

    export default class C extends Component {

        // 需要把上下文拿到, react内部把上下文放入该组件内
        static contextType = context

        render() {
            return (
                <div>
                    组件C
                    <h1>{this.context.name}</h1>
                    <h1>{this.context.sex}</h1>
                    <h1>{this.context.age}</h1>
                </div>
            )
        }
    }
    
    // ******函数组件******

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


```

### 只有类组件才可以创建上下文(旧版本中), 一个组件/其子组件声明多个上下文, 遇到相同的属性会产生覆盖效果(类型一致), 如果中途覆盖并改变其设定类型, 则其子组件在使用时会接收到改变后的类型的数据

### 当上下文发生变化时会影响到其所有子元素, 强制所有子元素更新, 并且无视shouldComponentUpdate阶段所做的优化

# PureComponent

## 纯组件, 用于避免不必要的渲染, 从而提升效率

### 正常情况下, 父组件发生变化其下的子组件全部都会重新渲染一遍

### 用于优化, 有一些组件他的props和state没有发生变化, 却因为父组件发生变化而被迫此组件发生变化, 这种重新渲染时没有必要的

### PureComponent是一个组件, 如果某个组件继承自该组件, 那么会默认对组件进行优化，是在shouldComponentUpdate阶段进行优化, 会进行比较更新前和更新后的数据, 是**浅比较**

### 以后注意在写组件时，组件能够进行继承PureComponent就优先继承

# render props

## 算是一种思维模式(横切关注点(HOC高阶组件也是这种思想)), 某个组件需要某个属性, 该属性通用性高, 则把该属性单独做一个组件, 使用的组件外层嵌套该组件并传值进入组件即可, 可以理解这种专门提供数据的组件称之为纯组件

# Portals

## 插槽: 将一个React元素渲染到执行的容器内, 由ReactDOM所提供

## 注意即使改变了某个React的元素的容器, 可当React元素代码中放置的位置仍受到原来位置的事件冒泡所影响

# 错误边界

## 默认情况下, 若一个组件render阶段发生错误, 会导致整个组件树全部被卸载

### 错误边界就是一个组件, 专门用于捕获错误, 错误边界此概念于16.0.0版本后提出的

### 仅在子组件发生错误时会触发, 自身组件发生变化时发生错误是无法捕获到的, 异步错误也无法捕获到, 事件所发生的错误也无法捕获到

### 写法

```js
    // 写法一(推荐)
    // 增加一个生命周期getDerivedStateFromError, 此阶段运行在渲染子组件的过程中, 发生错误之后, 更新页面之前
    class ErrorBoundary extends PureComponent {

        state = {
            ifError: false
        }

        // 此方法仅在子组件发生错误时会触发, 自身组件发生变化时发生错误是无法捕获到的
        static getDerivedStateFromError(error) {
            console.log('错误发生', error)
            // 返回一个对象, 该对象会覆盖掉原来的state
            return {
                ifError: true
            }
        }
        render() {
            if (this.state.ifError) {
                return (
                    <>组件发生错误</>
                )
            } else {
                return (
                    <>{this.props.children}</>
                )
            }
        }
    }

    // 写法二(不推荐)
    // 编写生命周期componentDidCatch, 此阶段运行在渲染子组件的过程中, 发生错误, 更新页面之后
    class ErrorBoundary extends PureComponent {

        state = {
            ifError: false
        }

        componentDidCatch(error, info) {
            console.log('发生错误', error, info)
            this.setState(cur => {
                return {
                    ifError: true
                }
            })
        }

        render() {
            if (this.state.ifError) {
                return (
                    <>组件发生错误</>
                )
            } else {
                return (
                    <>{this.props.children}</>
                )
            }
        }
    }

```

# React中的事件(**没听懂**)

## React中的事件是注册在document上的, 事件处理也基本上在document上处理

### 如果给真实的DOM注册事件并阻止了事件冒泡, 则响应的react事件是无法被触发的

### React的事件所给的event是经过react包装过的, 如果需要使用原生的event则通过e.nativeEvent得到

# 渲染原理

## React元素(React Element): 通过React.createElement语法创建, JSX是这种方法的一种语法糖

```js
    // 例如:
    <div>Hello World</div>
    <App />
    // 这些都是React元素
```

## React节点: 专门用于渲染到UI界面的对象, React节点是React元素的进一步转变, 最终ReactDOM一定是通过React节点来渲染也页面

- 节点类型
    - React DOM节点: 创建该节点的React元素的type为一个字符串
    - React 组件节点: 创建该节点的React元素的type是一个函数或者类
    - React TextNode节点: 创建该节点是由字符串所创建
    - React 空节点: 由null, undefined, false所创建
    - React 数组节点: 由数组所创建的节点

### React元素最终会变为React节点, 但是React节点不一定是由React元素所创建

## 首次渲染/新节点渲染

- 通过参数创建节点
- 根据不同的节点类型执行不同的事情
    - React DOM节点: 通过document.createElement创建真实DOM, 然后设置该DOM的属性, 遍历对应的React元素的children属性, 重复递归执行最开始的的步骤, 直到遍历完成
    - React TextNode节点: 通过document.createTextNode创建真实的文本DOM
    - React 空节点: 什么都不做
    - React 数组节点: 遍历数组, 重复递归执行最开始的的步骤, 直到遍历完成
    - React 组件节点:
        - 函数组件: 必须返回一个可以生成节点的内容, 并进行递归执行最开始的的步骤, 直至结束
        - 类组件: 
            - 创建该类实例
            - 调用生命周期方法 static getDeriveStateFromProps
            - 运行render拿到可以生成节点的内容
            - 递归执行最开始的的步骤, 直至结束
            - componentDidMounted阶段执行完毕的时机是该组件内部的Dom/组件都已经生成完毕
- 生成虚拟DOM树之后会将该树保存, 以便之后使用
- 会将创建好的DOM一起加入到页面上, 不是一个个加入
```js
    // 分析下段代码写出其结构:
    const a = '1'

    const app = (
        <div>
            <h1>
                组件App
                {['CodeGorgeous', null, <p>芜湖</p>]}
            </h1>
            <p>{undefined}</p>
            <p>a: {a}</p>
        </div>
    )
    // 对应的结构称之为虚拟DOM树
    |- div
        |- h1
            |- '组件App'
            |- ['CodeGorgeous', null, <p>芜湖</p>]
                |- 'CodeGorgeous'
                |- null
                |- p
                    |- '芜湖'
        |- p
            |- undefined
        |- p
            |- 'a:'
            |- '1'
```

## 更新节点

- 更新节点的情况
    - 重新调用ReactDOM.render
    - 调用setState
        - 1: 调用生命周期函数 static getDerivedStateFromProps
        - 2: 调用生命周期函数shouldComponentUpdate, 如果函数返回false则终止后续更新操作
        - 3: 运行render重新得到一个新的节点, 并与原来保存的旧虚拟DOM树进行比较(**对比更新**)
        - 4: 将getSnapshotBeforeUpdate加入队列
        - 5: 将componentDidUpdate加入队列
        - 6: 更新虚拟DOM树并保存以便下次比较使用
        - 7: 完成真实的DOM更新
        - 8: 依次调用队列中的getSnapshotBeforeUpdate
        - 9: 依次调用队列中的componentDidUpdate

## **对比更新**

### 将新产生的节点树和旧的节点树对比并发现其差异, 完成更新

- 找到对比的目标节点
    **对于是否一致的定义:** React元素的type是否一样
    - 新节点和旧节点一致
        - **空节点**不做改变
        - **DOM节点**则直接复用此DOM对象, 无须对该节点做出改变, 并将其属性变化记录, 之后同意更新, 递归遍历此新节点(递归遍历对比更新)
        - **TextNode节点**则重用之前的DOM对象, 记录变化
        - **组件节点**(组件类型一致)
            - 函数组件: 运行函数得到一个新的节点, 递归遍历此新节点(递归遍历对比更新)
            - 类组件: 运行render方法得到一个新的节点, 递归遍历此新节点(递归遍历对比更新)
        - **数组节点** 递归遍历数组并进行对比更新
    - 新节点和旧节点不一致
        - 创建新节点, 卸载旧节点, 挂载新节点
- 未找到对比的目标节点
    - 卸载节点

### 推荐在做显示隐藏或者小幅度删除某个节点时应该提前在将要删除的位置进行空节点占位, 可大幅度提升效率, 增大元素复用度

### 元素增加key值属性可提升效率,

## 卸载节点

- **文本节点、DOM节点、数组节点、空节点、函数组件节点:** 直接放弃该节点, 并递归卸载其子节点
- **类组件节点:** 直接放弃该节点, 代用生命周期函数componentWillUnmount, 递归卸载其子节点

# 工具

## StrictMode组件, 该组件本身不进行UI渲染, 和React.Fragment(可简写为<></>)类似, 该组件会在渲染时发现不合适的代码会进行及时的警告, 例如: 使用过期的生命周期/使用过期的API/有副作用

## Profiler

### 性能分析工具, 能够检测出组件加载花费时间, 是浏览器插件React Developer Tools所提供的
