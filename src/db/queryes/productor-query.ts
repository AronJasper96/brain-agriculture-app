import { productorEntity } from '../entities/productor-entity';
import { AppDataSource } from '../../utils/db/connection';

AppDataSource.initialize();
async function createProductor(data: any) {

  const user = new productorEntity();
  user.cpf = data.cpf;
  user.cnpj = data.cnpj;
  user.produtorNome = data.produtorNome;
  user.fazendaNome = data.fazendaNome;
  user.cidade = data.cidade;
  user.estado = data.estado;
  user.totalHecFazenda = data.totalHecFazenda;
  user.totalHecUtilizada = data.totalHecUtilizada;
  user.totalHecVegetacao = data.totalHecVegetacao;
  user.tipoPlantio = data.tipoPlantio;

  try {
    await AppDataSource.manager.save(user);
    console.log('Produtor criado com sucesso!');
  } catch (error) {
    console.error('Erro ao salvar o produtor no banco de dados:', error);
  }

}


// Buscar todos os produtores
async function getAllProductors() {
  try {

    const produtores = await AppDataSource.manager.find(productorEntity);
    console.log('Lista de produtores:');
    return produtores;
  } catch (error) { /* empty */ }
}

// Atualizar um produtor pelo ID
async function updateProductorByData(data: any) {
  try {
    const key = data.cpf === undefined || data.cpf === null || data.cpf === '' ? 'cnpj' : 'cpf';
    const productor = await AppDataSource.manager.findOne(productorEntity, { where: { [key]: data[key] } });
    if (!productor) {
      console.log('Produtor não encontrado');
      return;
    }

    productor.produtorNome = data.produtorNome === undefined || data.produtorNome === null || data.produtorNome === '' ? productor.produtorNome : data.produtorNome;
    productor.cidade = data.cidade === undefined || data.cidade === null || data.cidade === '' ? productor.cidade : data.cidade;
    productor.estado = data.estado === undefined || data.estado === null || data.estado === '' ? productor.estado : data.estado;
    productor.fazendaNome = data.fazendaNome === undefined || data.fazendaNome === null || data.fazendaNome === '' ? productor.fazendaNome : data.fazendaNome;
    productor.cnpj = data.cnpj === undefined || data.cnpj === null || data.cnpj === '' ? productor.cnpj : data.cnpj;
    productor.cpf = data.cpf === undefined || data.cpf === null || data.cpf === '' ? productor.cpf : data.cpf;
    productor.totalHecFazenda = data.totalHecFazenda === undefined || data.totalHecFazenda === null || data.totalHecFazenda === '' ? productor.totalHecFazenda : data.totalHecFazenda;
    productor.totalHecUtilizada = data.totalHecUtilizada === undefined || data.totalHecUtilizada === null || data.totalHecUtilizada === '' ? productor.totalHecUtilizada : data.totalHecUtilizada;
    productor.totalHecVegetacao = data.totalHecVegetacao === undefined || data.totalHecVegetacao === null || data.totalHecVegetacao === '' ? productor.totalHecVegetacao : data.totalHecVegetacao;
    productor.tipoPlantio = data.tipoPlantio === undefined || data.tipoPlantio === null || data.tipoPlantio === '' ? productor.tipoPlantio : data.tipoPlantio;

    await AppDataSource.manager.save(productor);
    console.log('Produtor atualizado com sucesso!');

  } catch (error) { return error; }
}


// Deletar um produtor pelo ID
async function deleteProductor(data: any) {
  try {
    const key = data.cpf === undefined || data.cpf === null || data.cpf === '' ? 'cnpj' : 'cpf';
    const reGex = data[key].replace(/[.-]/g, '').replace('/', '')
    const productor = await AppDataSource.manager.findOne(productorEntity, { where: { [key]: reGex } });
    if (!productor) {
      console.log('Produtor não encontrado');
      return;
    }

    await AppDataSource.manager.remove(productor);
    console.log('Produtor deletado com sucesso!');

  } catch (error) { return error; }
}

async function findProductorByCPF(cpf: number) {
  try {

    const productor = await AppDataSource.manager.findOne(productorEntity, { where: { cpf: cpf } });
    if (!productor) {
      console.log('Produtor não encontrado');
      return false;
    }
    return productor
  } catch (error) { return error; }
}

async function findProductorByCNPJ(cnpj: number) {
  try {

    const productor = await AppDataSource.manager.findOne(productorEntity, { where: { cnpj: cnpj } });
    if (!productor) {
      console.log('Produtor não encontrado');
      return false;
    }
    return productor
  } catch (error) { return error; }
}

export { createProductor, getAllProductors, updateProductorByData, deleteProductor, findProductorByCPF, findProductorByCNPJ }