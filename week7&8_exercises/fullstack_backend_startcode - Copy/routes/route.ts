
import express  from "express";
import { Request, Response } from "express";
import { getAllCars, createCar, updateCar, deleteCar, getCar } from "../controllers/controller";

const router = express.Router();

router.route("/").get(getAllCars).post(createCar)
router.route("/:id").patch(updateCar).get(getCar).delete(deleteCar);

export default router;
