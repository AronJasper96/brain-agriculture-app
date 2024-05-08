import { example } from '../db/queryes/example';
export async function exampleService() {
    try {
        const createRegister = await example();
        return createRegister
    } catch (error) { /* empty */ }
}