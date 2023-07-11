import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { insertCar, listCars, getCarById, updateCar, removeCar } from "../services/car";

const getCar = async ({params}: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await getCarById(id);
    res.send(response);
  } catch (error) {
    handleHttp(res, 'ERROR_GET_ITEM');
  }
}
const getCars = async (req: Request, res: Response) => {
  try {
    const response = await listCars();
    res.send(response);
  } catch (error) {
    handleHttp(res, 'ERROR_GET_ITEMS');
  }
}
const postCar = async ({body}: Request, res: Response) => {
  try {
    const response = await insertCar(body);
    res.send(response);
  } catch (error) {
    handleHttp(res, 'ERROR_POST_ITEM', error);
  }
}
const putCar = async ({params, body}: Request, res: Response) => {
  try {
    const { id} = params;
    const response = await updateCar(id, body);
    res.send(response);
  } catch (error) {
    handleHttp(res, 'ERROR_UPDATE_ITEM');
  }
}
const deleteCar = async ({params}: Request, res: Response) => {
  try {
    const {id} = params;
    const response = await removeCar(id);
    // Simple validation
    const validate = response ? response : "Car Not Found!";
    res.send(validate);
  } catch (error) {
    handleHttp(res, 'ERROR_DELETE_ITEM');
  }
}

export {getCar, getCars, postCar, putCar, deleteCar};