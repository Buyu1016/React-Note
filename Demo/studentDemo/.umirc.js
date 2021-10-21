export default {
    proxy: {
        '/api': {
            target: 'https://open.duyiedu.com',
            'changeOrigin': true
        }
    }
}