import { NextFunction, Request, Response } from "express";

export default (updateProducts) => {
    return async  (req: Request, res: Response, next: NextFunction) =>{
        try {
            const { id } = req.params;
            const body = req.body;
            const result = await updateProducts(id, body);
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    }
}