import { db } from "../db/dbconfig"

const Listar = async () =>{
    try{
        const sql = `SELECT * FROM usuarios`;
        db.query(sql, (err, data)=>{
            if(err)
                console.log("Error ao fazer a busca "+ err);
            return data;
        })
    }
    catch(error){
        console.log(error)
    }
}
const Atualizar = async () =>{
    try{
        const sql = "INSERT INTO funcionario(`name`, `email`,  `rg`, `cpf`, `cardsus`, `phone`, `nameMom`, `nameDad`, `address`, `numberhome`, `district`, `codzip`, `city`, `password`, `position`) VALUES (?)";

        db.query(sql, [values], (err, data)=>{
            if(err)
                console.log("Error ao fazer a busca "+ err);
            return data[0];
        })
    }
    catch(error){
        console.log(error)
    }
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