import { Express, Request, Response, NextFunction } from "express";

export default function getBookHanlder(req: Request, res: Response, next: NextFunction) {
    // @ts-ignore
    console.log(req.name);
    // @ts-ignore
    res.send(req.params);
}

module.exports = getBookHanlder;
