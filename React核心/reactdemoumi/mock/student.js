import mock from 'mockjs'

export default {
    // 当匹配到GET请求并请求路径为/api/student/findAll时会拦截请求并返回模拟数据
    "GET /api/student/findAll": mock.mock({
        msg: '查询成功',
        status: 'file',
        "data|100": [{
            name: '@cname',
            address: '@city'
        }]
    })
}