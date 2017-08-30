var koa = require('koa')
var app = new koa()

app.use(function*() {
  this.body = `
    <html>
      <head>
      </head>
      <body>
        <div class="hello">Hello woooorld!</div>
      </body>
    <html>
    `
})

app.listen(8080, function() {
  console.log('Server running on http://localhost:8080')
})
