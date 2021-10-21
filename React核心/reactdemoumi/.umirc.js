export default {
    // routes: [
    //     {
    //         path: '/',
    //         component: '@/layouts/index',
    //         exact: false,
    //         routes: [
    //             {
    //                 path: '/',
    //                 component: '@/components/Home'
    //             },
    //             {
    //                 path: '/login',
    //                 component: '@/components/Login/index',
    //                 title: '登录'
    //             },
    //             {
    //                 path: '/welcome',
    //                 component: '@/components/Welcome/index',
    //                 title: '欢迎光临',
    //                 wrappers: ['@/route/handleTitle.jsx']
    //             }
    //         ]
    //     }
    // ],
    // dva: {
    //     immer: false, // 不建议开启, 因为会造成自己能直接在reducers内函数写state++这样的操作
    //     hmr: false
    // }
    // 代理
    proxy: {
        '/api': {
          'target': 'https://open.duyiedu.com',
          // 替换地址
          'changeOrigin': true,
        },
    },
}