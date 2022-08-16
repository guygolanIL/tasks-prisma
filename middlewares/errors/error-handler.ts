import { NextFunction, Request, Response } from "express";

export function errorHandler(error: Error, req: Request, res: Response, next: NextFunction) {
    console.warn(error);

    res.status(500).send({
        message: 'unknown error occured',
    });
}