const assert = require('assert');
const axios = require('axios');

describe('Testes de rotas', function(){
    // Teste para a rota POST /create
    it('Deve criar um registro', async function() {
      try {
        const response = await axios.post('http://localhost:3000/create', { 
          "cnpj": "12.345.678/0000-83",
            "cpf": "123.456.789-71",
            "produtorNome": "Fulano de Tal",
            "fazendaNome": "Fazenda ABC",
            "cidade": "Cidade",
            "estado": "Estado",
            "totalHecFazenda": 100,
            "totalHecUtilizada": 50,
            "totalHecVegetacao": 50,
            "tipoPlantio": ["Soja", "Milho", "Algodão", "Café", "Cana de Açucar"]
         });
        assert.strictEqual(response.status, 200);
        // Adicione mais asserções conforme necessário
        
      } catch (error) {
        assert.fail(error.message);
      }
    });

    // Teste para a rota GET /read
    it('Deve obter todos os registros', async function() {
      try {
        const response = await axios.get('http://localhost:3000/read');
        assert.strictEqual(response.status, 200);
        // Adicione mais asserções conforme necessário
        
      } catch (error) {
        assert.fail(error.message);
      }
    });

    // Teste para a rota PUT /update
    it('Deve atualizar um registro', async function() {
      try {
        const response = await axios.put('http://localhost:3000/update', { 
          "cnpj": "12.345.678/0000-83",
            "cpf": "123.456.789-71",
            "produtorNome": "Testes Unitarios",
            "fazendaNome": "Executado",
            "cidade": "Cidade",
            "estado": "Estado",
            "totalHecFazenda": 100,
            "totalHecUtilizada": 50,
            "totalHecVegetacao": 50,
            "tipoPlantio": ["Soja", "Milho", "Algodão", "Café", "Cana de Açucar"]});
        assert.strictEqual(response.status, 200);
        // Adicione mais asserções conforme necessário
        
      } catch (error) {
        assert.fail(error.message);
      }
    });

    // Teste para a rota DELETE /delete
    it('Deve excluir um registro', async function() {
      try {
        const response = await axios.delete('http://localhost:3000/delete', { data:{"cpf": "123.456.789-71"}});
        assert.strictEqual(response.status, 200);
        // Adicione mais asserções conforme necessário
        
      } catch (error) {
        assert.fail(error.message);
      }
    });
});
