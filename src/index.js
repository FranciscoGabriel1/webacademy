const express = require("express")
const app = express()
const PORT = process.env.PORT ?? 7777
const dotenv = require("dotenv")
dotenv.config()



app.get("/", (req,res) =>{//req é requisicao e res a resposta
    res.send("Hello world!")
})

app.get("/about", (req,res) =>{
    res.send("Sobre a aplicação")
})


app.listen(PORT, ()=>{
    console.log(`Servidor ouvindo a porta ${PORT}`)
})