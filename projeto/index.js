const express = require('express')
const exphbs = require('express-handlebars')
const port = 9990
const app = express()

const hbs = exphbs.create({
    partialsDir:['views/partials']
})
app.use(express.static('public'))
app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

app.get('/',(req,res)=>{
   const produto = [
    {
        img:"/img/CHURRAS.png",
         title:"Churrasqueira 3000",
         category:"churrasco",
         preco:"R$ 2.500",

    },
    {
        img:'/img/bratz.PNG',
        title:"Bratz Rock Angel",
        category:"brinquedos",
        preco:"R$ 9.500",
    },
    {
        img:'/img/espeto.jpg',
        title:"Espetos para churrasco",
        category:"churrasco",
        preco:"R$ 1.500",
    }
   ] 
 return res.render('home', {produto})
 
})


app.listen(port,()=>{
    console.log(`Servidor ${port}`)
})
