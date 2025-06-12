import { useEffect, useState } from "react";
import api from "../api/api";

const Pets = () =>{
    const [pets, setPets] = useState('');

    useEffect(async ()=>{
        const response = await api.get('/pets');
        setPets(response);
    },[]);

    return(
        <div>
            pagina pets
        </div>
    )
}

export default Pets;