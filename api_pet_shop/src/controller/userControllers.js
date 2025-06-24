import userServices from "../services/userServices.js";

async function Listar(req, res){
    try {
        const usuarios = await userServices.Listar();
        res.status(200).json(usuarios);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Erro no banco de dados tente novamente mais tarde." + error})
    }
};

const getOne = async(req, res)=>{
    try {
        const id  = req.params.id;
        const consulta = await userServices.getOne(id)
        res.status(200).json(consulta);
    } catch (error) {
        console.log(error);
        res.status(400).json({message: "Erro na consulta"})
    }
}

async function Cadastrar(req, res){
    try {
        const cadastro = await userServices.Cadastrar(req.body);
        res.status(200).json({message: "Cliente cadastrado com sucesso!"});
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Erro no banco de dados tente novamente mais tarde." + error})
    }
};

async function Atualizar(req, res) {
    try {
        const id = req.params.id;
        const dados = req.body;
        const resultado = await userServices.Atualizar(id, dados);

        res.status(200).json({ message: "Usuário atualizado com sucesso", resultado });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Erro ao atualizar usuário: " + error });
    }
}

async function Deletar(req, res) {
    try {
        const id = req.params.id;
        const mensagem = await userServices.Deletar(id); // retorna "Cliente João apagado!"
        
        return res.status(200).json({ message: mensagem });

    } catch (error) {
        console.error("Erro ao deletar usuário:", error);

        if (error.status === 404) {
            return res.status(404).json({ message: error.message });
        }

        return res.status(500).json({ message: "Erro no banco de dados. Tente novamente mais tarde." });
    }
}


export default {Listar, getOne, Cadastrar, Atualizar, Deletar}