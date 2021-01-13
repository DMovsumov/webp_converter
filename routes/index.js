const Router = require('@koa/router')

const router = new Router()

router.use('/webp_converter', require('./webp_converter/webp_converter'))

module.exports = router