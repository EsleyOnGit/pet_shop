import { db } from "../db/dbconfig.js";

const Listar = () =>{
    return new Promise((resolve, reject)=>{
        const sql = 'SELECT * FROM animal';
        db.query(sql, (err, data)=>{
            if(err){
                console.log("Erro ao buscar dados: "+ err);
                return reject(err);
            }
            resolve(data);
        });
    });
};

const getOne = (id) => {
    return new Promise((resolve, reject) => {
        const sql = `
            SELECT 
                animal.id,
                animal.nome,
                animal.idade,
                tipo_animal.especie,
                tipo_animal.descricao,
                tipo_animal.raca,
                cliente.nome AS nome_cliente,
                cliente.id AS id_cliente
            FROM animal
            JOIN cliente ON cliente.id = animal.id_cliente
            JOIN tipo_animal ON tipo_animal.id = animal.id_tipo_animal
            WHERE animal.id = ?
        `;
        db.query(sql, [id], (err, res) => {
            if (err) {
                console.log("ops! deu erro " + err);
                return reject(err);
            }

            return resolve(res.length === 0 ? "Pet não encontrado!" : res[0]);
        });
    });
};


const Cadastrar = async (values) => {
   
    return new Promise((resolve, reject) => {
        let b = Date.now();
        b = b.toString();
        let id = b.slice(9,13);
        id = Number(id[1])
        const tipoAnimal = [
            id,
            values.descricao,
            values.raca,
            values.nome,
            values.especie
        ];

        const sql1 = 'INSERT INTO tipo_animal (ID, descricao, raca, nome, especie) VALUES (?)';
        
        db.query(sql1, [tipoAnimal], (erro1, res1) => {
            if (erro1) {
                console.log("Erro ao inserir tipo_animal:", erro1);
                return reject(erro1);
            }

            // Após sucesso do primeiro insert, faz o segundo
            const data = [
                id,
                values.nome,
                values.idade,
                values.id_cliente,
                values.id_tipo_animal
            ];

            const sql2 = 'INSERT INTO animal (ID, nome, idade, id_cliente, id_tipo_animal) VALUES (?)';

            db.query(sql2, [data], (erro2, res2) => {
                if (erro2) {
                    console.log("Erro ao inserir animal:", erro2);
                    return reject(erro2);
                }

                // Se ambos inserirem com sucesso
                resolve({ tipo_animal: res1, animal: res2 });
            });
        });
    });
};


const Atualizar = async (values, id) => {

    return new Promise((resolve, reject) => {
        // Atualiza tipo_animal
        const sql1 = `
            UPDATE tipo_animal 
            SET raca = ?, nome = ?, especie = ? 
            WHERE ID = ?
        `;
        const tipoAnimalValues = [
            values.raca,
            values.nome,
            values.especie,
            id // id do tipo_animal
        ];

        db.query(sql1, tipoAnimalValues, (err1, res1) => {
            if (err1) return reject("Erro ao atualizar tipo_animal: " + err1);

            // Atualiza animal
            const sql2 = `
                UPDATE animal 
                SET nome = ?, idade = ?, id_cliente = ?, id_tipo_animal = ? 
                WHERE ID = ?
            `;
            const animalValues = [
                values.nome,
                values.idade,
                values.id_cliente,
                values.id_tipo_animal,
                id // id do animal a ser atualizado
            ];

            db.query(sql2, animalValues, (err2, res2) => {
                if (err2) return reject("Erro ao atualizar animal: " + err2);

                // Tudo certo
                resolve({
                    tipo_animal: res1,
                    animal: res2
                });
            });
        });
    });
};



const Deletar = (id) => {
    return new Promise((resolve, reject) => {
        // Primeiro: buscar o nome do animal
        const buscar = "SELECT nome FROM animal WHERE ID = ?";
        db.query(buscar, [id], (erro, resultadoConsulta) => {
            if (erro) {
                console.error("Erro ao consultar:", erro);
                return reject(erro);
            }

            if (resultadoConsulta.length === 0) {
                return reject({ status: 404, message: "Animal não encontrado" });
            }

            const nome = resultadoConsulta[0].nome;

            // Agora deletar
            const deletar = "DELETE FROM animal WHERE ID = ?";
            db.query(deletar, [id], (erroDelete, resultadoDelete) => {
                if (erroDelete) {
                    console.error("Erro ao deletar:", erroDelete);
                    return reject(erroDelete);
                }

                return nome;
            });
        });
    });
};


export default { Listar, getOne, Atualizar, Cadastrar, Deletar };