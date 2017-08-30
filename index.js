var koa = require('koa')
var app = new koa()

app.use(function*() {
  this.body = 'Hello world!'
})

app.listen(4567, function() {
  console.log('Server running on http://localhost:4567')
})
