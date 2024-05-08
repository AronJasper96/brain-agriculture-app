import { Request, Response } from 'express';
import { exampleService } from '../services/example-service';
export async function exampledb(res: Response, req: Request) {
    try {
        const exampleRegister = await exampleService();
        res.status(200).json(exampleRegister);
    } catch (error) { /* empty */ }
}