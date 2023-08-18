const express = require('express')
const app = express()
const port = 5009

const path = require('path')
const basePath = path.join(__dirname,'template')

app.use(express.urlencoded({
    extended:true
}))
app.use(express.json())

const meusProdutos = require('./meusProdutos')
app.use('/meusProdutos',meusProdutos)

app.get('/',(req,res)=>{
    res.sendFile(`${basePath}/home.html`)
})
app.get('/add',(req,res)=>{
    res.sendFile(`${basePath}/cadastrarProduto.html`)
})
app.post('/save',(req, res)=>{
    const {nome ,preco, descricao} = req.body

    res.sendFile(`${basePath}/visualizarProduto.html`)
})

app.listen(port,()=>{
    console.log(`Servidor on ${port}`)
})