import dotenv from "dotenv";
import mysql from "mysql";
import fs from'fs';

dotenv.config();

const db = mysql.createConnection({
    host: process.env.DB_host ||',
    user: process.env.DB_USER ||',
    password: process.env.DB_PASSWD ||',
    database: process.env.DB_NAME ||',
    port: 3306,
    ssl: {ca: fs.readFileSync('C:/Users/esley/Downloads/DigiCertGlobalRootCA.crt.pem')}
});

db.connect((err)=>{
    if(err)
        console.log("Banco de dados não conectado!" +err);
    else
        console.log(`Conectado ao banco pet_shop`);
});

export { db };
