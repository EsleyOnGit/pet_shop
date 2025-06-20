import { useEffect, useState } from "react";
import api from "../api/api";

const Pets = () =>{
    const [pets, setPets] = useState([]);

    useEffect(()=> {
        const getData = async ()=>{
        const response = await api.get('/pets');
        console.log(response.data)
        setPets(response.data);
    }
    getData();
    },[]);

    return(
        <div>
            {
                pets.map((pet) => <li key={pet.id}>{pet.nome}</li>)
            }
        </div>
    )
}

export default Pets;