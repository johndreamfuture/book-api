let express = require('express')
let router = require('../router/router')

let app = express()


app.use('/api', router)

const PORT = 9000
let server = app.listen(PORT)
server.on('listening', () => console.log("Listening on port" + PORT))
server.on('error', error => console.error("something is wrong", error))