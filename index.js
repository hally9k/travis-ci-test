var koa = require('koa')
var app = new koa()

app.use(function*() {
  this.body = 'Hello woooorld!'
})

app.listen(8080, function() {
  console.log('Server running on http://localhost:8080')
})
