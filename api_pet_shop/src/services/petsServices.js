import petsRepository from "../repository/petsRepository.js";

const Listar = async() =>{
    const todosPets = await petsRepository.Listar();
    return todosPets;
};

const getOne = async(id)=>{
    const consulta = await petsRepository.getOne(id)
    return consulta;
}

const Cadastrar = async(values) =>{
    const addPet = await petsRepository.Cadastrar(values);
    return addPet;
};

const Atualizar = async (values) => {
    try {
        const resultado = await petsRepository.Atualizar(values);
        return resultado;
    } catch (error) {
        console.error("Erro no service:", error);
        throw error; // repassa o erro para o controller lidar
    }
};

const Deletar = async(id) =>{
    const removePet = await petsRepository.Deletar(id);
    return removePet;
};

export default { Listar, getOne, Cadastrar, Atualizar, Deletar };