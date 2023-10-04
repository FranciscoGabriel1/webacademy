import express, { Request, Response } from "express"
import { loremIpsum } from "lorem-ipsum";

const router = express.Router();

router.use("/", (req: Request, res: Response) => {
     res.send("Hello world!");
});

router.get("/about", (req: Request, res: Response) => {
     res.send("Sobre!");
});

router.get('/lorem/:paragrafos',(req,res)=>{
res.send(
loremIpsum({
  count: 3,               
  format: "html",         
  paragraphLowerBound: 3,  
  paragraphUpperBound: 7,  
  random: Math.random,     
  sentenceLowerBound: 5,   
  sentenceUpperBound: 15,  
  suffix: "\n",            
  units: "paragraph",      
 })
);
})

export default router;

