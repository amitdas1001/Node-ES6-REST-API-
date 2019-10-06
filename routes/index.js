const user = require('./users')

module.exports = (router)=>{
    user(router)
    return router
}