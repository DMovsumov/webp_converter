const env = require('dotenv')
const Koa = require('koa');

try {
    env.config({path: './.env'})

    const { API_PORT } = process.env;

    const port = parseInt(API_PORT, 10) || 4200;

    const server = new Koa();

    server.listen(port, '0.0.0.0', (err) => {
        if (err) {
            throw err
        }

        console.log(`API server started on ${port}`)
    })

} catch (e) {
    console.log(e)
}
