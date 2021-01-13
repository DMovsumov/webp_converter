const Router = require('@koa/router');
const sharp = require('sharp')
const axios = require('axios')
const koaBody = require('koa-body')

const router = new Router();

router.post('/', koaBody({ multipart: true }), async (ctx) => {
    console.log(ctx.request.files)

    ctx.body = ctx.request.files
})

module.exports = router.routes()