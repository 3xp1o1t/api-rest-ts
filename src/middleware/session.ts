import { Response, Request, NextFunction } from "express";
import { verifyToken } from "../utils/jwt.handle";
import { JwtPayload } from "jsonwebtoken";

interface RequestExt extends Request {
  user?: string | JwtPayload;
}

const checkJwt = (req: RequestExt, res: Response, next: NextFunction) => {
  try {
    const jwtByUser = req.headers.authorization || '';
    const token = jwtByUser.split(' ').pop();

    const isTokenValid = verifyToken(`${token}`);

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