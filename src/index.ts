import express, { Request, Response } from "express";
import dotenv from "dotenv";
import validateEnv from "./utils/validateEnv";
//arcanjommlopes , dbfernandes

dotenv.config();
validateEnv()

const app = express()
const PORT = process.env.PORT || 3333;
app.get("/", (req: Request, res: Response) => {
     res.send("Hello world!");
});
app.listen(PORT, () => {
  console.log(`Express app iniciada na porta ${PORT}.`);
});

/*const express = require("express") 
const app = express()
const dotenv = require("dotenv")
dotenv.config()
const PORT = process.env.PORT ?? 7777
app.get("/", (req,res) =>{//req é requisicao e res a resposta
    res.send("Hello world!")
})

app.get("/about", (req,res) =>{
    res.send("Sobre a aplicação")
})

app.listen(PORT, ()=>{
    console.log(`Servidor ouvindo a porta ${PORT}`)
})*/
