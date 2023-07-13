import { Request, Response } from "express";
import { registerNewUser, loginUser } from "../services/auth";

const registerController = async ({body}: Request, res: Response) => {
  const response = await registerNewUser(body);
  res.send(response);
};

const loginController = async (req: Request, res: Response) => {
  const {email, password} = req.body;
  const response = await loginUser({email, password});
  res.send(response);
};

export { registerController, loginController };
