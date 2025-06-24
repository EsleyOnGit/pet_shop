import { db } from "../db/dbconfig.js"

const Listar = async () => {
    try {
        const sql = `SELECT * FROM cliente`;
        
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

const getOne = async(id) =>{
    return new Promise((resolve, reject) =>{
        const sql = `SELECT * FROM cliente WHERE ID = ${id}`;
        db.query(sql, (err, resp) =>{
            if(err){
                return reject("Usuário não encontrado");
            }
            else{
                return resolve(!resp[0]? 'Cliente não encontrado!' : resp[0]);
            }
        })
    })
}

const Cadastrar = async (dados) => {
    let b = Date.now();
        b = b.toString();
        let id = b.slice(9,13);
        id = Number(id[1])
        
    const values = [
        id,
        dados.nome,
        dados.email,
        dados.telefone,
        dados.rua,
        dados.numero,
        dados.cep,
        dados.uf
    ];
    console.log(values);

    return new Promise((resolve, reject) => {

        const sql = `INSERT INTO cliente(ID, nome, email, telefone, rua, numero, cep, estado) VALUES (?)`;
        db.query(sql, [values], (err, data) => {
            if (err) reject(err);
            else resolve(data);
        });
    });
}

const Atualizar = async (id, values) => {
    return new Promise((resolve, reject) => {
        const sql = `
            UPDATE cliente SET 
                nome = ?, 
                email = ?, 
                telefone = ?, 
                rua = ?, 
                numero = ?, 
                cep = ?, 
                estado = ?
            WHERE id = ?
        `;

        const params = [
            values.nome,
            values.email,
            values.telefone,
            values.rua,
            values.numero,
            values.cep,
            values.uf,
            id
        ];

        db.query(sql, params, (err, data) => {
            if (err) reject(err);
            else resolve(data);
        });
    });
};


const Deletar = async (id) => {
    try {
        return new Promise((resolve, reject) => {
            // Primeiro: buscar o nome do cliente
            const consulta = "SELECT nome FROM cliente WHERE ID = ?";
            db.query(consulta, [id], (erro, resultadoConsulta) => {
                if (erro) {
                    console.error("Erro ao consultar:", erro);
                    return reject(erro);
                }

                if (resultadoConsulta.length === 0) {
                    return reject({ status: 404, message: "Cliente não encontrado" });
                }

                const nome = resultadoConsulta[0].nome;

                // Segundo: deletar o cliente
                const sql = "DELETE FROM cliente WHERE ID = ?";
                db.query(sql, [id], (err, resultadoDelete) => {
                    if (err) {
                        console.error("Erro ao deletar:", err);
                        return reject(err);
                    }

                    if (resultadoDelete.affectedRows === 0) {
                        return reject({ status: 404, message: "Cliente não encontrado para deletar" });
                    }

                    console.log("Cliente deletado com sucesso.");
                    return resolve(`Cliente ${nome} apagado!`);
                });
            });
        });
    } catch (error) {
        console.log("Erro no Banco de dados. Por favor tente novamente mais tarde: " + error);
    }
};


export default { Listar, getOne, Cadastrar, Atualizar, Deletar };