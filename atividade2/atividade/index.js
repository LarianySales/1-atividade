const express = require('express')
const app = express()
const port = 5009
const router = require('./routers/produto.js')
const bodyParser = require("body-parser")
const path = require('path')
// const basePath = path.join(__dirname,'template')

app.use(express.static(path.join(__dirname,'template')))

app.use(bodyParser.urlencoded({
    extended:true
}))

app.use(router)


app.listen(port,()=>{
    console.log(`Servidor on ${port}`)
})