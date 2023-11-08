import { Response, Request } from "express";


/*async function finalizarCompra(req:Request, res: Response){
  if(!req.session.uid)
    return res.status(400).json({msg:"Usuário não logado"});
  if(!req.session.carrinhoCompras)
    return res.status(400).json({msg:"Carrinho vazio"}) 
  try{
    await registrarCompra(req.session.carrinhoCompra)
    res.status(201).json({msg:"Compra finalizada"})
  } catch(error){
    res.status(500).json(error);
  } 
}

export {addProdutoCarrinho, finalizarCompra}*/
