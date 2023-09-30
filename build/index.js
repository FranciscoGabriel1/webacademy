"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3333;
app.get("/", (req, res) => {
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
