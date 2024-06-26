const express = require("express")
require("dotenv").config();

const app = express();
const PORT = process.env.PORT ?? 3333

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(PORT, () => {
    console.log(`Express foi inicado na porta ${PORT}.`);
})