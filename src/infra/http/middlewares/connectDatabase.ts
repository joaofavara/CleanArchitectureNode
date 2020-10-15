import { connect } from 'mongoose';
import { NextFunction, Request, Response } from "express";

export default async (req: Request, res: Response, next: NextFunction) => { 
    try {
        await connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});
        console.log('Mongo connected ...');
        next();
    } catch (error) {
        console.log(error);
    }
}