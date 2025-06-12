async function Listar(req, res){
    try {
        const usuarios = await userServices.Listar();
        res.status(200).json(usuarios);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Erro no banco de dados tente novamente mais tarde."})
    }
}
async function Atualizar(req, res){
    try {
        const { id } = req.params.id;
        const usuarios = await userServices.Listar(id);
        res.status(200).json(usuarios);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Erro no banco de dados tente novamente mais tarde."})
    }
}
async function Deletar(req, res){
    try {
        const { id } = req.params.id;
        const usuarios = await userServices.Listar(id);
        res.status(200).json({message: "Usuário removido!" + usuarios});
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Erro no banco de dados tente novamente mais tarde."})
    }
}

export default {Listar, Atualizar, Deletar}