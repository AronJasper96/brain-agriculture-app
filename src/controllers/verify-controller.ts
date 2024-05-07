import { Request, Response } from 'express';
export async function verifyController(req: Request, res: Response) {
    res.status(200).send('Hello World!');    
}