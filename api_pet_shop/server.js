import express from "express";
import cors from "cors";

import router from "./src/routes/Routes.js";

const server = express();

server.use(express.json());
server.use(cors());

server.use('/', router);

// server.get("/", async (req, res)=>{
//     try {
//         const sql = "select * from cliente"
//         db.query(sql, (err, resp)=>{
//             return res.json(resp).status(200)
//         })
//     } catch (error) {
//         console.log("erro no servidor " + error);
//         return res.json({message: "Erro no servidor tente novamente mais tarde"}).status(500)
//     }
// });

/*
app.post('/endereco', async (req, res)=>{
    const values = [
        req.body.name,
        req.body.rg,
        req.body.cpf,
        req.body.cardsus,
        req.body.phone,
        req.body.nameMom,
        req.body.nameDad,
        req.body.address,
        req.body.numberhome,
        req.body.district,
        req.body.codzip,
        req.body.city
    ]

    try {
        const sql = "INSERT INTO paciente (`name`,  `rg`, `cpf`, `cardsus`, `phone`, `nameMom`, `nameDad`, `address`, `numberhome`, `district`, `codzip`, `city`) VALUES (?)";
        db.query(sql, [values], (err, data) =>{
            return res.json('cadastrado com sucesso!')
        })
   } catch (error) {
    return res.json({error: 'Erro ao inserir os dados ' + error})
   }
});

app.put('/atualizar/:id', (req, res) => {
    const email = req.body.email;
    const id = req.params.id;

            const sql = `
                UPDATE paciente_id 
                SET name = ?, rg = ?, cpf = ?, cardsus = ?, phone = ?, nameMom = ?, nameDad = ?, address = ?, numberhome = ?, district = ?, codzip = ?, city = ?
                WHERE paciente_id = ?`;

            const values = [
                req.body.name,
                req.body.rg,
                req.body.cpf,
                req.body.cardsus,
                req.body.phone,
                req.body.nameMom,
                req.body.nameDad,
                req.body.address,
                req.body.numberhome,
                req.body.district,
                req.body.codzip,
                req.body.city
            ];

            try {           
                db.query(sql, [...values, id], (err, resultado) => {
                    if (err) {
                        return res.status(500).json({ message: 'Erro ao atualizar o paciente' });
                    }
                    return res.json({ message: 'Paciente atualizado com sucesso!' });
                });
            } catch (error) {
                console.log(error)
                return res.status(500).json({message: 'erro ao atualizar os dados'})
            }
});

// delete cadastro 
app.delete('/cadastrados/:id', async (req, res) => {
    try {
        const { id } = req.params;
        if (!id || isNaN(id)) {
            return res.status(400).json({ message: 'ID inválido' });
        }else{
            const sql = "DELETE FROM paciente WHERE Paciente_ID = ?"
            db.query(sql, [id], (error, results) => {
                if (error) {
                    console.error('Erro ao executar a query:', error);
                    return res.status(500).json({ message: 'Erro interno do servidor' });
                }
                
                if (results.affectedRows === 0) {
                    return res.status(404).json({ message: 'Paciente não encontrado' });
                }
                
                res.status(200).json({ message: 'Paciente deletado com sucesso' });
                console.log('Paciente apagado!');
            });
        }
        
    } catch (err) {
        console.error('Erro na rota de delete:', err);
        res.status(500).json({ message: 'Erro interno do servidor' });
    }
});
*/
server.listen(3001, ()=>{
    console.log("Servidor rodando em http://192.168.0.104:3001")
});

