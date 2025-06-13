import { db } from "../db/dbconfig";

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

const Cadastrar = (animal_id, nome, raca) =>{
    return new Promise((resolve, reject)=>{
        values = [
            animal_id,
            nome,
            raca
        ];

        const sql = 'INSERT INTO animal (animal_id, nome, raca) VALUES (?, ?, ?)';
        db.query(sql, [values], (err, data)=>{
            if(err){
                console.log("Erro ao buscar dados: "+ err);
                return reject(err);
            }
            resolve(data);
        });
    });
};

const Atualizar = (id, animal_id, nome, raca) =>{
    return new Promise((resolve, reject)=>{
        const sql = 'SELECT * FROM animal WHERE animal_id = ?';
        values = [
            animal_id,
            nome,
            raca
        ];

        db.query(sql, [values], (err, data)=>{
            if(err){
                console.log("Erro ao buscar dados: "+ err);
                return reject(err);
            }
            resolve(data);
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

export default { Listar, Atualizar, Cadastrar, Deletar };