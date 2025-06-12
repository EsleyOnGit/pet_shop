const Listar = async () =>{
    
    const usuarios = await userMeddleware.Listar();
    return usuarios;
}
const Atualizar = async () =>{
    
    const usuarios = await userMeddleware.Atualizar();
    return usuarios;
}
const Deletar = async (id) =>{
    
    const usuarios = await userMeddleware.Deletar(id);
    return usuarios;
}