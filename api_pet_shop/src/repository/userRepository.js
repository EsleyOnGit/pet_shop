import { db } from "../db/dbconfig.js"

const Listar = async () => {
    try {
        const sql = `SELECT * FROM fornecedor`;
        
        const usuarios = await new Promise((resolve, reject) => {
            db.query(sql, (err, data) => {
                if (err) {
                    console.log("Erro ao fazer a busca: " + err);
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
        
        return usuarios;
    } catch (error) {
        console.log("Erro:", error);
        throw error;
    }
}

const Atualizar = async (values) => {
    return new Promise((resolve, reject) => {
        const sql = `INSERT INTO funcionario(...) VALUES (?)`;
        db.query(sql, [values], (err, data) => {
            if (err) reject(err);
            else resolve(data);
        });
    });
}

const Deletar = async (id) =>{
    try{
        const sql = "DELETE FROM paciente WHERE Paciente_ID = ?"
        
        db.query(sql, [id], (err, data)=>{
            if(err)
                console.log("Error ao fazer a busca "+ err);
            if (results.affectedRows === 0) {
                    return res.status(404).json({ message: 'Paciente não encontrado' });
                }

            return console.log("usuário apagado!");
        })
    }
    catch(error){
        console.log("Erro no Banco de dados. Por favor tente novamente mais tarde"+error)
    }
}

export default { Listar, Atualizar, Deletar };