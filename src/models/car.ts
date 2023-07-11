import {Schema, Types, model, Model } from "mongoose";
import { Car } from "../interfaces/car.interface";

const CarSchema = new Schema<Car>(
  {
    name: {
      type: String,
      required: [true, 'Car name is required']
    },
    color: {
      type: String,
      required: [true, 'Color is required!']
    },
    year: {
      type: Number,
      required: [true, 'Year is required']
    },
    description: {
      type: String,
      required: [true, 'Description is required']
    },
    price: {
      type: Number,
      required: [true, 'Price is required']
    },
    engine: {
      type: String,
      enum: ["gasoline", "electric"],
      required: [true, 'Engine type is required']
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

const CarModel = model("cars", CarSchema);

export default CarModel;