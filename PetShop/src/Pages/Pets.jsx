import { useEffect, useState } from "react";
import api from "../api/api";

const Pets = () =>{
    const [pets, setPets] = useState([]);

    useEffect(()=> {
        const getData = async ()=>{
        const response = await api.get('/users');
        console.log(response.data)
        setPets(response.data);
    }
    getData();
    },[pets]);

    return(
        <div>
            {
                pets.map((pet) => <li key={pet.id}>{pet.name}</li>)
            }
        </div>
    )
}

export default Pets;