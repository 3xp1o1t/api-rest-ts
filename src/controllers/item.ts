import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";

const getItem = (req: Request, res: Response) => {
  try {
    
  } catch (error) {
    handleHttp(res, 'ERROR_GET_ITEM');
  }
}
const getItems = (req: Request, res: Response) => {
  try {
    
  } catch (error) {
    handleHttp(res, 'ERROR_GET_ITEMS');
  }
}
const postItem = ({body}: Request, res: Response) => {
  try {
    res.send(body);
  } catch (error) {
    handleHttp(res, 'ERROR_POST_ITEM');
  }
}
const putItem = (req: Request, res: Response) => {
  try {
    
  } catch (error) {
    handleHttp(res, 'ERROR_UPDATE_ITEM');
  }
}
const deleteItem = (req: Request, res: Response) => {
  try {
    
  } catch (error) {
    handleHttp(res, 'ERROR_DELETE_ITEM');
  }
}

export {getItem, getItems, postItem, putItem, deleteItem};