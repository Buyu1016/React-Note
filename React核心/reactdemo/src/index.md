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
