import { createProductor, getAllProductors, updateProductorByData, deleteProductor, findProductorByCNPJ, findProductorByCPF } from '../db/queryes/productor-query';
export async function createService(data: any) {
    try {
        const createRegister = await createProductor(data);
        return createRegister
    } catch (error) { return error; }
}

export async function updateService(data: any) {
    try {
        const createRegister = await updateProductorByData(data);
        return createRegister
    } catch (error) { return error; }
}

export async function deleteService(data: any) {
    try {
        const createRegister = await deleteProductor(data);
        return createRegister
    } catch (error) { return error; }
}

export async function getAllService() {
    try {
        const createRegister = await getAllProductors();
        return createRegister
    } catch (error) { return error; }
}

export async function getBy(cpf: number | undefined, cnpj: number | undefined) {
    try {
        if (!cpf && cnpj) {
            const createRegister = await findProductorByCNPJ(cnpj);
            return createRegister
        }
        if (cpf && !cnpj) {
            const createRegister = await findProductorByCPF(cpf);
            return createRegister
        }
        if (cpf && cnpj) {
            const createRegister = await findProductorByCNPJ(cnpj);
            return createRegister
        }

    } catch (error) { return error; }
}