import { Request, Response } from 'express';
import { createService, updateService, deleteService, getAllService, getBy } from '../services/productor-service';
import { Validator } from '../utils/validator/contract-validator';
export async function createRegister( req: Request, res: Response) {
    try {
        const validator = new Validator();
        const isValid = validator.validateData(req.body);
        if (!isValid) {
            res.status(400).json({ error: 'Invalid data' });
            return;
        }
        const verifyExistRegister = await getBy(isValid.cpf, isValid.cnpj);
        console.log(verifyExistRegister)
        if (verifyExistRegister) {
            res.status(400).json({ error: 'Register already exists, please update' });
            return;
        }
        const exampleRegister = await createService(isValid);
        res.status(200).json({ 'Criado com sucesso!': exampleRegister });
    } catch (error) { 
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
     }
}

export async function updateRegister( req: Request, res: Response) {
    try {
        const validator = new Validator();
        const isValid = validator.validateData(req.body);
        if (!isValid) {
            res.status(400).json({ error: 'Invalid data' });
            return;
        }
       const exampleRegister = await updateService(isValid);
       res.status(200).json(exampleRegister);
    } catch (error) { 
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
     }
}

export async function deleteRegister( req: Request, res: Response) {
    try {
       const exampleRegister = await deleteService(req.body);
       res.status(200).json(exampleRegister);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

export async function getAllRegister( req: Request, res: Response) {
    try {
        const exampleRegister = await getAllService();
        res.status(200).json(exampleRegister);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}