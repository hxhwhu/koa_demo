const Koa = require('koa');
const router = require('./router');
const cors = require('koa2-cors');
const bodyParser = require('koa-bodyparser');
const static = require('koa-static');
const path = require('path');
const app = new Koa();

app.use(static(path.join(__dirname, './dist')));
app.use(cors());
app.use(bodyParser());
app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
  console.log('[demo] route-use-middleware is running at port 3000');
});