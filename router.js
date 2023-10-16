const Router = require('koa-router');
const fs = require('fs');
const path = require('path');
const query = require('./mysql');
let router = new Router();

router.get('./test', async (ctx) => {
  let resParams = ctx.query;
  let sql = 'select * from list';
  let list = await query(sql);
  let json = {
    success: true,
    data: list,
    query: resParams
  };
  ctx.response.body = json;
});

module.exports = router;