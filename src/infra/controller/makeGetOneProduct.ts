import { NextFunction, Request, Response } from "express";

export default (getOneProducts) => {
    return async  (req: Request, res: Response, next: NextFunction) =>{
        try {
            const { id } = req.params;
            const result = await getOneProducts(id);
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    }
}