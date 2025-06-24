import petsServices from "../services/petsServices.js";

const Listar = async(req, res) =>{
    try {
        const todosPets = await petsServices.Listar();
        return res.status(200).json(todosPets);
    } catch (error) {
        return res.status(500).json({message: "Tivemos um erro ao acessar tente mais tarde!" + error})
    }
};

const getOne = async(req, res) =>{
    try {
        const id = req.params.id;
        const consulta = await petsServices.getOne(id);
        return res.status(200).json(consulta)
    } catch (error) {
        console.log(error)
    }
}

const Cadastrar = async(req, res) =>{
    try {
        const todosPets = await petsServices.Cadastrar(req.body);
        return res.status(200).json(todosPets);
    } catch (error) {
        return res.status(500).json({message: "Tivemos um erro ao acessar tente mais tarde! " + error})
    }
};

const Atualizar = async (req, res) => {
    try {
        const id = req.params.id
        const resultado = await petsServices.Atualizar(req.body,id);
        return res.status(200).json({
            message: "Atualização realizada com sucesso!",
            resultado
        });
    } catch (error) {
        console.error("Erro no controller:", error);
        return res.status(500).json({
            message: "Erro ao atualizar os dados. Tente novamente mais tarde.",
            error: error.toString()
        });
    }
};

const Deletar = async (req, res) => {
    const id = req.params.id;
    try {
        const resultado = await petsServices.Deletar(id);
        return res.status(200).json({
            mensagem: `Animal '${resultado.nome}' (ID: ${resultado.id}) deletado com sucesso.`,
        });
    } catch (erro) {
        const status = erro.status || 500;
        return res.status(status).json({ erro: erro.message || "Erro ao deletar animal" });
    }
};

export default { Listar, getOne, Cadastrar, Atualizar, Deletar };
