import { Car } from "../interfaces/car.interface";
import CarModel from "../models/car";

const insertCar = async (item: Car) => {
  const res = await CarModel.create(item);
  return res;
};

const listCars = async () => {
  const res = await CarModel.find({});
  return res;
}

const getCarById = async (id: string) => {
  const res = await CarModel.findOne({_id:id});
  return res;
};

const updateCar = async (id: string, data: Car) => {
  const res = await CarModel.findOneAndUpdate({ _id:id}, data, {
    new: true
  });
  return res;
};

const removeCar = async (id: string) => {
  const res = await CarModel.findByIdAndDelete({_id:id});
  return res;
}

export { insertCar, listCars, getCarById, updateCar, removeCar };