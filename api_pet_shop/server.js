import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./src/routes/Routes.js";

const server = express();

dotenv.config();

server.use(express.json());
server.use(cors());

server.use('/', router);

server.listen(process.env.SERVER_PORT, ()=>{
    console.log(`Servidor rodando em http://localhost:${process.env.SERVER_PORT || 3001}`);
});

