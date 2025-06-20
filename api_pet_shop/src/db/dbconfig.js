import fs from'fs';
import mysql from "mysql";
import dotenv from "dotenv";

dotenv.config();

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.PORT,
    ssl: {ca: fs.readFileSync(process.env.SSL_CA_PATH)}
});

db.connect((err)=>{
    if(err)
        console.log("Banco de dados não conectado! " + err);
    else
        console.log(`Conectado à ${process.env.DB_DATABASE}`);
});

export { db };
