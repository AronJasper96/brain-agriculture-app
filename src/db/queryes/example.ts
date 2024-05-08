import { productorEntity } from '../entities/productor-entity';
import { AppDataSource } from '../../utils/db/connection';
export async function example() {
    try {
        console.log('Iniciando a aplicação...');
        await AppDataSource.initialize();
        const user = new productorEntity();
        user.produtorNome = 'John Doe';
        user.fazendaNome = 'john@example.com';
        user.cidade = 'New York';
        user.estado = 'NY';
        user.totalHecFazenda = 100;
        user.totalHecUtilizada = 50;
        user.totalHecVegetacao = 50;
        user.tipoPlantio = ['Café'];
        await AppDataSource.manager.save(user);

        console.log('Usuário salvo com sucesso!');
    } catch (error) { /* empty */ }
}