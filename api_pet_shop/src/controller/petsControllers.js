import petsServices from "../services/petsServices.js";

const Listar = async(req, res) =>{
    try {
        const todosPets = await petsServices.Listar();
        return res.status(200).json(todosPets);
    } catch (error) {
        return res.status(500).json({message: "Tivemos um erro ao acessar tente mais tarde!"})
    }
};

const Cadastrar = async(req, res) =>{
    try {
        const id = req.params.id;
        nome = req.body.nome;
        const todosPets = await petsServices.Atualizar(id);
        return res.status(200).json(todosPets);
    } catch (error) {
        return res.status(500).json({message: "Tivemos um erro ao acessar tente mais tarde!"})
    }
};

const Atualizar = async(req, res) =>{
    try {
        const id = req.params.id;
        const todosPets = await petsServices.Atualizar(id);
        return res.status(200).json(todosPets);
    } catch (error) {
        return res.status(500).json({message: "Tivemos um erro ao acessar tente mais tarde!"})
    }
};

const Deletar = async(req, res) =>{
    try {
        const id = req.params.id;
        const todosPets = await petsServices.Deletar(id);
        return res.status(200).json(todosPets);
    } catch (error) {
        return res.status(500).json({message: "Tivemos um erro ao acessar tente mais tarde!"})
    }
};

export default { Listar, Cadastrar, Atualizar, Deletar };
