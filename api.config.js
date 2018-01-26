const isProdMode = Object.is(process.env.NODE_ENV, 'production')

module.exports = {
    baseUrl: isProdMode ? 'https://www.zhaoliangliang.com/' : 'http://localhost:9999/'
}