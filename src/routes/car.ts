import { Router } from "express";
import {
  deleteCar,
  getCar,
  getCars,
  postCar,
  putCar,
} from "../controllers/car";
import { logMiddleware } from "../middleware/log";

const router = Router();

router.get("/", getCars);
router.get("/:id", logMiddleware, getCar);
router.post("/", postCar);
router.put("/:id", putCar);
router.delete("/:id", deleteCar);

export { router };
