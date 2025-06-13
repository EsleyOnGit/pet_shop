import userMeddleware from "../repository/userRepository.js";

const Listar = async () =>{
    
    const usuarios = await userMeddleware.Listar();
    return usuarios;
}
const Atualizar = async (id) =>{
    
    const usuarios = await userMeddleware.Atualizar(id);
    return usuarios;
}
const Deletar = async (id) =>{
    
    const usuarios = await userMeddleware.Deletar(id);
    return usuarios;
}

export default {Listar, Atualizar, Deletar};