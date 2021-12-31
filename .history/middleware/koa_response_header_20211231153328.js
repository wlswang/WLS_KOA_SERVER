// TODO 设置响应头的中间件
module.exports = (ctx, next) => {
  const contentType = 'application/json; charset=utf-8'
  ctx.set('Content-Type', contentType)
  ctx.response.body = '{"success": true}'
  next()
}