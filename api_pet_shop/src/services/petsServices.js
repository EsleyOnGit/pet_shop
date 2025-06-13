const Listar = async() =>{
    const todosPets = await repository.listar();
    return todosPets;
};

const Cadastrar = async() =>{
    const addPet = await repository.cadastrar();
    return addPet;
};

const Atualizar = async(id) =>{
    const editPet = await repository.Atualizar(id);
    return editPet;
};

const Deletar = async(id) =>{
    const removePet = await repository.Deletar(id);
    return removePet;
};

export default { Listar, Cadastrar, Atualizar, Deletar };