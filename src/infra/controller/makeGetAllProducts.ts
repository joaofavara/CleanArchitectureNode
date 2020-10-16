import { NextFunction, Request, Response } from "express";

export default (getAllProducts) => {
    return async  (req: Request, res: Response, next: NextFunction) =>{
        try {
            const result = await getAllProducts();
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    }
}