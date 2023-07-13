import CarModel from "../models/car";

const listOrders = async () => {
  const res = await CarModel.find({});
  return res;
}

export {listOrders};