import { useEffect, useState } from "react";
import api from "../api/api";

const Usuarios = () =>{
    const [usuarios, setUsuarios] = useState('');

    useEffect(async ()=>{
        const response = await api.get('/usuarios');
        setUsuarios(response);
    },[]);

    return(
        <div>
            pagina usuarios
        </div>
    )
}

export default Usuarios;