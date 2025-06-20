import { useEffect, useState } from "react";
import api from "../api/api";

import "./user.module.style.css";
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
        <div className="form-exemple">
            <h2>Lista de pets</h2>
            <div className="container-user">
                <ul className="lista">
                    {
                        pets.map((pet, index) => <li key={pet.id} className={index %2 === 0?"user-list par" : "user-list"}>{pet.nome}
                            <div className="container-button">
                                <button className="button-li atualizar">Atualizar</button>
                                <button className="button-li excluir">Excluir</button>
                            </div>
                        </li>)
                    }
                </ul>
            </div>
            
        </div>
    )
}

export default Pets;