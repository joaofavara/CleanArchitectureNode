import { NextFunction, Request, Response } from "express";

export default (saveProduct) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            const body = req.body;
            const result = await saveProduct(body);
            res.status(200).send(result);
        } catch(error) {
            next(error);
        }
    }
}
