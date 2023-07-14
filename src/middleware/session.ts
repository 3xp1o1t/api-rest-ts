import { Response, NextFunction } from "express";
import { RequestExt } from "../interfaces/req-ext.interface";
import { verifyToken } from "../utils/jwt.handle";

const checkJwt = (req: RequestExt, res: Response, next: NextFunction) => {
  try {
    const jwtByUser = req.headers.authorization || '';
    const token = jwtByUser.split(' ').pop();
    const isTokenValid = verifyToken(`${token}`) as { id: string }; // Modificado para trabajar con la interfas RequestExt

    if (!isTokenValid){
      res.status(401);
      res.send("INVALID SESSION TOKEN");
    }else{
      req.user = isTokenValid;  // -> user logged data
      next();
    }

  } catch (e) {
    res.status(400);
    res.send("INVALID SESSION TOKEN")
  }
};

export { checkJwt };