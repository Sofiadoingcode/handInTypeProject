import { Request, Response } from "express";
import { json } from "stream/consumers";
import Car from '../models/model';


export const getAllCars = async (req: Request, res: Response) => {
    const queryObj = req.query;
    const data = await Car.find(queryObj);
    
    try{
        res.status(200)
            .json({
                status: "success",
                result: data
            })

    } catch (err) {
        res.status(400)
            .json(
                {
                    status: "fail",
                    message: err
                }
            )
    }
    

}

export const createCar = async (req: Request, res: Response) => {

    const newCar = await Car.create(req.body);
    try{
        res.status(201)
            .json({
                status: "success",
                data: newCar
            })
        
    } catch (err) {
        res.status(400)
            .json(
                {
                    status: "fail",
                    message: err
                }
            )
    }
    

}

export const updateCar = async (req: Request, res: Response) => {

    try{

        const car = await Car.findByIdAndUpdate(req.params.id, req.body, {
            new: true, 
            runValidators: true
        });

        const jsonData = req.body;
        res.status(200)
            .json({
                status: "success",
                data: {car}
            })

    } catch (err) {
        res.status(400)
            .json(
                {
                    status: "fail",
                    message: err
                }
            )
    }
    
}

export const getCar = async (req: Request, res: Response) => {

    try{

        const car = await Car.findById(req.params.id).populate({
            path:"reviews", 
            select: '-__v -createdAt'
        });
        
        res.status(200)
            .json({
                status: "success",
                data: {car}
            })

    } catch (err) {
        res.status(400)
            .json(
                {
                    status: "fail",
                    message: err
                }
            )
    }
    
}

export const deleteCar = async (req: Request, res: Response) => {

    try{

        await Car.findByIdAndDelete(req.params.id);

    
        res.status(204)
            .json({
                status: "success",
                data: null
            })

    } catch (err) {
        res.status(400)
            .json(
                {
                    status: "fail",
                    message: err
                }
            )
    }
    
}

