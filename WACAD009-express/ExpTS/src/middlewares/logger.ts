import { NextFunction, Request, Response } from 'express';

type logger = "simples" | "completo"

function logger(tipo: logger) {
  if (tipo === 'simples') {
    return (req: Request, res: Response, next: NextFunction) => {
      console.log(new Date().toISOString(), req.url, req.method);
      next();
    };
  } else {
    return (req: Request, res: Response, next: NextFunction) => {
      console.log(
        new Date().toISOString(),
        req.url,
        req.method,
        req.httpVersion,
        req.get('User-Agent'),
      );
      next();
    };
  }
}

export default logger;
