import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import api from "../api/api";
import "./user.module.style.css";

const Clientes = () =>{
    const [clientes, setClientes] = useState([]);
    const navigate = useNavigate();
    
    async function Excluir(id){
        console.log(id)
        const response = await api.delete("/deletar/usuario/"+id);
        console.log(response.data);
    };

    useEffect(()=>{
        const getClientes = async ()=>{
        const response = await api.get('/usuarios');
        setClientes(response.data);
        }
        getClientes();
    },[]);

    return(
        <div className="form-example">
            <h2>Lista de clientes</h2>
            <div className="container-user">
                <ul className="lista">
                    {
                        clientes.map((cliente, index) =>(
                            <li key={index} className={index %2 === 0?"user-list par" : "user-list"}>{cliente.nome}
                                <div className="container-button">
                                    {console.log(cliente)}
                                    <button className="button-li atualizar" onClick={()=> navigate("/atualizar/usuario/"+ cliente.ID)}>Atualizar</button>
                                    <button className="button-li excluir" onClick={()=> Excluir(cliente.ID)}>Excluir</button>
                                </div>
                                
                            </li>
                        ))
                    }
                </ul>
                
            </div>
        </div>
    );
};

export default Clientes;