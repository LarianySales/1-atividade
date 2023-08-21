const {  randomUUID } = require('crypto')
const { response } = require('express')
const express = require('express')
const router = express.Router()


const path = require('path')
const basePath = path.join(__dirname,'..','template')
const produto = []

router.use(express.json())

router.get('/',(req,res)=>{
    res.sendFile(`${basePath}/home.html`)
})
router.get('/add',(req,res)=>{
    res.sendFile(path.join(__dirname,'..','template','cadastrarProduto.html'))
})
router.post('/cadastrarProdutos',(req, res)=>{
    const {nome ,preco, descricao} = req.body
    const product = {
        id: randomUUID(),
        nome,
        preco,
        descricao ,
   
    }

    produto.push(product)
    return res.json(produto)
    // res.redirect(path.join(__dirname,'..','template','visualizarProduto.html'))
})
router.get('/cadastrarProdutos',(req,res)=>{
    return res.json(produto)
})

 module.exports = router