export class Validator {
    validateCnpj(cnpj: string | undefined) {
        if (cnpj === undefined || cnpj === '' || cnpj === null) {
            return ;
        }
        const reGexCNPJ = cnpj.replace(/[.-]/g, '').replace('/', '')
        return parseInt(reGexCNPJ);
    }

    validateCpf(cpf: string | undefined) {
        if (cpf === undefined || cpf === '' || cpf === null) {
            return ;
        }
        const reGexCPF = cpf.replace(/[.-]/g, '').replace('/', '')
        return parseInt(reGexCPF);
    }

    validateString(value: string | undefined): boolean {
        // Verifica se a string não está vazia ou undefined
        return value !== undefined && value.trim().length > 0;
    }

    validateNumber(value: number | undefined): boolean {
        // Verifica se o número não é undefined ou NaN
        return value !== undefined && !isNaN(value);
    }

    validateTotalArea(fazenda: number,  utilizado: number, vegetacao: number): boolean {
        // Verifica se o número não é undefined ou NaN
        return fazenda !>= utilizado + vegetacao;
    }
    validateTipoPlantio(tipoPlantio: string[] | undefined): boolean {
        if (!tipoPlantio || tipoPlantio.length === 0) {
            return false; // Retorna falso se o array for indefinido ou vazio
        }
        const tiposValidos = ["Soja", "Milho", "Algodão", "Café", "Cana de Açucar"];
        return tipoPlantio.every(tipo => tiposValidos.includes(tipo));
    }

    validateData(data: any){
        const payload: any = {};
        if (!data.cnpj && !data.cpf) {
            console.error("Erro: Deve ser informado pelo menos um entre CPF e CNPJ.");
            return false;
        }

        if (!this.validateCnpj(data.cnpj) && !this.validateCpf(data.cpf)) {
            console.error("Erro: CPF ou CNPJ inválido(s).");
            return false;
        }

        if (!this.validateString(data.produtorNome)) {
            console.error("Erro: Nome do produtor inválido ou não informado.");
            return false;
        }
        if (!this.validateString(data.fazendaNome)) {
            console.error("Erro: Nome da fazenda inválido ou não informado.");
            return false;
        }
        if (!this.validateString(data.cidade)) {
            console.error("Erro: Cidade inválida ou não informada.");
            return false;
        }
        if (!this.validateString(data.estado)) {
            console.error("Erro: Estado inválido ou não informado.");
            return false;
        }
        if (!this.validateNumber(data.totalHecFazenda)) {
            console.error("Erro: Total de hectares da fazenda inválido ou não informado.");
            return false;
        }
        if (!this.validateNumber(data.totalHecUtilizada)) {
            console.error("Erro: Total de hectares utilizados inválido ou não informado.");
            return false;
        }
        if (!this.validateNumber(data.totalHecVegetacao)) {
            console.error("Erro: Total de hectares de vegetação inválido ou não informado.");
            return false;
        }

        if(!this.validateTipoPlantio(data.tipoPlantio)){
            console.error("Erro: Tipo de plantio inválido.");
            return false;
        }

        if(!this.validateTotalArea(data.totalHecFazenda, data.totalHecUtilizada, data.totalHecVegetacao)){
            console.error("Erro: Total de hectares ultrapassa o disponivel na fazenda.");
            return false;
        }

        payload.cnpj = this.validateCnpj(data.cnpj)
        payload.cpf = this.validateCpf(data.cpf)
        payload.produtorNome = data.produtorNome;
        payload.fazendaNome = data.fazendaNome;
        payload.cidade = data.cidade;
        payload.estado = data.estado;
        payload.totalHecFazenda = data.totalHecFazenda;
        payload.totalHecUtilizada = data.totalHecUtilizada;
        payload.totalHecVegetacao = data.totalHecVegetacao;
        payload.tipoPlantio = data.tipoPlantio;
        return payload;
    }
}


