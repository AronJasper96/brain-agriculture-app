
# brain-agriculture-app




## Stack utilizada

**Deployed-Vercel** Project NodeJS + Typescript e PostgresSQL

**Back-end:** NodeJS + Typescript, Express e PostegresSQL


## Documentação
Link da Collection com as rotas Locais e para a aplicação na Cloud da Vercel

[Documentação](https://drive.google.com/file/d/1Iv9F6N9PzmSgisM_MlR1yIM_ZMWUkbDD/view?usp=sharing)


## Documentação da API

#### Cria um registro

```http
  POST http://localhost:3000/create
```

| Parâmetro   | Tipo       | Exemplo                           |
| :---------- | :--------- | :---------------------------------- |
| `cnpj` | `string` | "cnpj": "12.345.678/9662-83", |
| `cpf` | `string` | "cpf": "123.456.789-71", |
| `produtorNome` | `string` | "produtorNome": "Teste do Delete", |
| `fazendaNome` | `string` |  "fazendaNome": "Fazenda ABC", |
| `cidade` | `string` | "cidade": "Cidade", |
| `estado` | `string` | "estado": "Estado", |
| `totalHecFazenda` | `int` | "totalHecFazenda": 100, |
| `totalHecUtilizada` | `int` |  "totalHecUtilizada": 50, |
| `totalHecVegetacao` | `int` | "totalHecVegetacao": 50, |
| `tipoPlantio` | `array` | "tipoPlantio": ["Soja", "Milho", "Algodão", "Café", "Cana de Açucar"] |

```json
{
    "cnpj": "12.345.678/9662-83",
    "cpf": "123.456.789-71",
    "produtorNome": "Teste do Delete",
    "fazendaNome": "Fazenda ABC",
    "cidade": "Cidade",
    "estado": "Estado",
    "totalHecFazenda": 100,
    "totalHecUtilizada": 50,
    "totalHecVegetacao": 50,
    "tipoPlantio": ["Soja", "Milho", "Algodão", "Café", "Cana de Açucar"]
}
```

#### Atualiza registro

```http
  PUT http://localhost:3000/update
```


| Parâmetro   | Tipo       | Exemplo                           |
| :---------- | :--------- | :---------------------------------- |
| `cnpj` | `string` | "cnpj": "12.345.678/9662-83", |
| `cpf` | `string` | "cpf": "123.456.789-71", |
| `produtorNome` | `string` | "produtorNome": "Teste do Delete", |
| `fazendaNome` | `string` |  "fazendaNome": "Fazenda ABC", |
| `cidade` | `string` | "cidade": "Cidade", |
| `estado` | `string` | "estado": "Estado", |
| `totalHecFazenda` | `int` | "totalHecFazenda": 100, |
| `totalHecUtilizada` | `int` |  "totalHecUtilizada": 50, |
| `totalHecVegetacao` | `int` | "totalHecVegetacao": 50, |
| `tipoPlantio` | `array` | "tipoPlantio": ["Soja", "Milho", "Algodão", "Café", "Cana de Açucar"] |

```json
{
    "cnpj": "12.345.678/9662-83",
    "cpf": "123.456.789-71",
    "produtorNome": "Teste do Delete",
    "fazendaNome": "Fazenda ABC",
    "cidade": "Cidade",
    "estado": "Estado",
    "totalHecFazenda": 100,
    "totalHecUtilizada": 50,
    "totalHecVegetacao": 50,
    "tipoPlantio": ["Soja", "Milho", "Algodão", "Café", "Cana de Açucar"]
}
```
#### Deleta registro

```http
  DELETE http://localhost:3000/delete
```


| Parâmetro   | Tipo       | Exemplo                           |
| :---------- | :--------- | :---------------------------------- |
| `cnpj` | `string` | "cnpj": "12.345.678/9662-83", |
| `cpf` | `string` | "cpf": "123.456.789-71", |


```json
{
    "cnpj": "12.345.678/9662-83",
}
```
ou
```json
{

    "cpf": "123.456.789-71",
}
```

#### Lista todos os registros

```http
  GET http://localhost:3000/read
```
Exemplo retorno
```json
[
	{
		"id": 3,
		"cnpj": "12345678901233",
		"cpf": null,
		"produtorNome": "Fulano de Tal",
		"fazendaNome": "Fazenda ABC",
		"cidade": "Cidade",
		"estado": "Estado",
		"totalHecFazenda": 100,
		"totalHecUtilizada": 50,
		"totalHecVegetacao": 50,
		"tipoPlantio": [
			"Soja",
			"Milho",
			"Algodão",
			"Café",
			"Cana de Açucar"
		]
	}
]
```