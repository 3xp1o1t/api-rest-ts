import {Router} from "express";
import { deleteCar, getCar, getCars, postCar, putCar } from "../controllers/car";

const router = Router();

router.get('/', getCars);
router.get('/:id', getCar);
router.post('/', postCar);
router.put('/:id', putCar);
router.delete('/:id', deleteCar);

export {router};