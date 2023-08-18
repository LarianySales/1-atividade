const express = require('express')
const router = express.Router()


const path = require('path')
const basePath = path.join(__dirname, '../template')


router.get('/add',(req,res)=>{
    res.sendFile(`${basePath}/cadastrarProduto.html`)
})
router.post('/save',(req, res)=>{
    const {nome ,preco, descricao} = req.body

    res.sendFile(`${basePath}/visualizarProduto.html`)
})
module.exports = router