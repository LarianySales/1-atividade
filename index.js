const express = require('express')
const app = express()
const port = 3590
const path = require('path')
const basePath = path.join(__dirname,'templates')

app.use(express.urlencoded({
    extended:true
}))
app.use(express.json())


app.get('/',(req,res)=>{
    res.sendFile(`${basePath}/index.html`)
})



app.get('/contato/add',(req,res)=>{
    res.sendFile(`${basePath}/formContato.html`)
})
app.post('/contato/save',(req,res)=>{
    const {name, age , tell, email} = req.body

 console.log(express.json())

})
app.get('/curso',(req,res)=>{
    res.sendFile(`${basePath}/cursos.html`)
})
app.listen(port,()=>{
    console.log(`Servidor on ${port} 👻`)
})