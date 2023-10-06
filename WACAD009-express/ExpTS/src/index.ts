import express from "express";
import dotenv from "dotenv";
import validateEnv from "./utils/validateEnv";
//import morgan from 'morgan';
import router from './router/router';
import { engine } from 'express-handlebars';




dotenv.config();
validateEnv()
const app = express();
const PORT = process.env.PORT || 3001;

app.use(router);
app.listen(PORT, () => {
  console.log(`Express app iniciada na porta ${PORT}.`);
});

app.engine("handlebars", engine({
 helpers: require(`${__dirname}/views/helpers/helpers.ts`),
 
}));
app.set("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", `${__dirname}/views`);



app.use('/img', express.static(`${__dirname}/../public/img`));//http://localhost:3000/img/maca.jpg

/*
app.use(morgan('completo'));

app.use((req: Request, res: Response, next: NextFunction) => {
    console.log("Oi Oi");
    next();
});

app.use((req, res, next) => {
 console.log(`Requisição ${req.method} ${req.url}`);
 next();
});
*/


