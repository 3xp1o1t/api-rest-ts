import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { JwtPayload } from "jsonwebtoken";

interface RequestExt extends Request {
  user?: string | JwtPayload;
}

const getOrders = async (req: RequestExt, res: Response) => {
  try {
    res.send({
      data: "ESTO SOLO SE VE SI TIENES SESSION CON JWT",
      user: req.user,
    })
  } catch (error) {
    handleHttp(res, 'ERROR_GET_ITEMS');
  }
}
export { getOrders };