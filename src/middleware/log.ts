import { NextFunction, Request, Response } from "express";

// Funciona como un intermediario entre las rutas y el controlador.
// En las rutas se manda a llamar y se ejecuta durante la llamada de la ruta.
// Next determina si la ruta continua hacia el controlador o no.
// Si no se usa next() y deseamos cambiar el resultado del controlador, usamos res.send('data');
const logMiddleware = (req: Request, res: Response, next: NextFunction) => {
  console.log('Hi im the middleware');
  next();
};

export { logMiddleware };