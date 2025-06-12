import { useEffect, useState } from "react";
import api from "../api/api";

const Home = () =>{
    
    useEffect(async ()=>{
        const response = await api.get('/pets');
        setPets(response);
    },[]);

    return(
        <div>
            pagina home
        </div>
    )
}

export default Home;