import { useEffect, useState } from "react";
import api from "../api/api";

const Clientes = () =>{
    const [clientes, setClientes] = useState([]);

    useEffect(()=>{
        const getClientes = async ()=>{
        const response = await api.get('/users');
        setClientes(response.data);
        }
        getClientes();
    },[clientes]);

    return(
        <div>
            <ul>
                {
                    clientes.map((cliente, index) =>(
                        <li key={index}>{cliente.name}</li>
                    ))
                }
            </ul>
        </div>
    );
};

export default Clientes;