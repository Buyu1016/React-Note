import task from './Task'
import isGenerator from 'is-generator'
import isPromise from 'is-promise'
import runEffect from './effects/runEffect'

/**
 * 
 * @param {*} generator 
 * @param {*} store 
 */
export default function run (store, generatorFn, ...args) {
    console.log('run已启动')
    const generator = generatorFn(...args)
    if (isGenerator(generator)) { // 是一个生成器
        // 执行next()
        next()
    } else { // 其他类型
        
    }

    function next(nextValue, err, isOver) {
        let result;
        if (err) {
            result = generator.throw(err)
        } else if (isOver) {
            result = generator.return(isOver)
        } else {
            result = generator.next(nextValue)
        }
        const {value, done} = result
        // 是否结束迭代
        if (done) {
            return
        } else {
            // 要根据value值做不同的事情
            if (value['@@redux-saga/IO']) { // 表明当前为指令
                runEffect(store, value, next)
            } else if (isPromise(value)) { // 如果是promise则需要等待
                value.then(resp => {
                    return next(resp)
                }).catch(err => {
                    return next(null, err)
                })
            } else { // 当前不是指令promise则正常向下继续next()
                return next(value)
            }
        }
    }

    return task
}