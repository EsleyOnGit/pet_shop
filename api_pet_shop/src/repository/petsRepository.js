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

const getOne = (id) =>{
    return new Promise((resolve, reject)=>{
        const sql = `SELECT * from animal WHERE ID = ${id}`;

        db.query(sql, (err, res)=>{
            if(err)
                reject(console.log("ops! deu erro " + err))
            return resolve(!res[0]? "Pet não encontrado!": res[0])
        })
    })
};

const Cadastrar = async (values) => {
   
    return new Promise((resolve, reject) => {
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


const Atualizar = async (values) => {
    return new Promise((resolve, reject) => {
        // 1. Atualizar cliente
        const sql1 = `UPDATE cliente SET nome = ?, email = ?, telefone = ?, rua = ?, numero = ?, cep = ?, uf = ? WHERE id = ?`;
        const clienteValues = [
            values.cliente.nome,
            values.cliente.email,
            values.cliente.telefone,
            values.cliente.rua,
            values.cliente.numero,
            values.cliente.cep,
            values.cliente.uf,
            values.cliente.id
        ];

        db.query(sql1, clienteValues, (err1, res1) => {
            if (err1) return reject("Erro ao atualizar cliente: " + err1);

            // 2. Atualizar tipo_animal
            const sql2 = `UPDATE tipo_animal SET descricao = ?, raca = ?, nome = ?, especie = ? WHERE ID = ?`;
            const tipoAnimalValues = [
                values.tipo_animal.descricao,
                values.tipo_animal.raca,
                values.tipo_animal.nome,
                values.tipo_animal.especie,
                values.tipo_animal.id
            ];

            db.query(sql2, tipoAnimalValues, (err2, res2) => {
                if (err2) return reject("Erro ao atualizar tipo_animal: " + err2);

                // 3. Atualizar animal
                const sql3 = `UPDATE animal SET nome = ?, idade = ?, id_cliente = ?, id_tipo_animal = ? WHERE ID = ?`;
                const animalValues = [
                    values.animal.nome,
                    values.animal.idade,
                    values.animal.id_cliente,
                    values.animal.id_tipo_animal,
                    values.animal.id
                ];

                db.query(sql3, animalValues, (err3, res3) => {
                    if (err3) return reject("Erro ao atualizar animal: " + err3);

                    // Todos atualizados com sucesso
                    resolve({
                        cliente: res1,
                        tipo_animal: res2,
                        animal: res3
                    });
                });
            });
        });
    });
};


const Deletar = (id) =>{
    return new Promise((resolve, reject)=>{
        const sql = 'DELETE * FROM animal WHERE animal_id = ?';
        db.query(sql, [id], (err, data)=>{
            if(err){
                console.log("Erro ao buscar dados: "+ err);
                return reject(err);
            }
            resolve(data);
        });
    });
};

export default { Listar, getOne, Atualizar, Cadastrar, Deletar };