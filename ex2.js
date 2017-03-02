var express = require('express')

var app = express()

app.get(function (req, res) {

  res.send(hello)
})


app.listen(4000, console.log('the app is listening on port 4000'))

// this app is broken, please debug and fix it

