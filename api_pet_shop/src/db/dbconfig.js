import dotenv from "dotenv";
import mysql from "mysql";

dotenv.config();

const db = mysql.createConnection({
    host: process.env.DB_host || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWD || '',
    database: process.env.DB_NAME || 'av3_bd'
});

db.connect((err)=>{
    if(err)
        console.log(`Conectado ao banco petshop`);
});

export { db };