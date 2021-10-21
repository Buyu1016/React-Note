import { getAllStudent } from '../utils/fetchStudent'

export default {
    state: {
        count: 0,
        datas: []
    },
    reducers: {
        setStudent(state, action) {
            return {
                count: action.payload.count,
                datas: action.payload.datas
            }
        },
        clearStudent(state, action) {
            return {
                count: 0,
                datas: []
            }
        }
    },
    effects: {
        *asyncSetStudent(action, effect) {
            let result
            console.log('开始请求学生数据')
            result = yield effect.call(getAllStudent)
            console.log('请求成功', result)
            yield effect.put({type: 'setStudent', payload: result})
            console.log('添加完成')
        }
    }
}