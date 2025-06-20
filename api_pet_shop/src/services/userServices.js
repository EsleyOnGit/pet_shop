import userRepository from "../repository/userRepository.js";

const Listar = async () =>{
    const usuarios = await userRepository.Listar();
    return usuarios;
}

const getOne = async(id) =>{
    const consulta = await userRepository.getOne(id);
    return consulta;
}

const Cadastrar = async (values) =>{
    const cadastro = await userRepository.Cadastrar(values);
    return cadastro;
}

const Atualizar = async (id) =>{
    const usuarios = await userRepository.Atualizar(id);
    return usuarios;
}

const Deletar = async (id) =>{
    const usuario = await userRepository.Deletar(id);
    return usuario;
}

export default {Listar, getOne, Cadastrar, Atualizar, Deletar};