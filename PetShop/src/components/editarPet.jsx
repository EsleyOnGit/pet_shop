import { useState } from "react"
import api from "../api/api";

const CadastrarPet = () =>{
    const [name, setName] = useState('');
    const [raca, setRaca] = useState('');
    const [especie, setEspecie] = useState('');
    const [tamanho, setTamanho] = useState('');
    const [peso, setPeso] = useState('');

    function handleSubmit(e){
        e.presentDefault()
        values = {
            name, 
            raca,
            especie,
            tamanho,
            peso
        }
        api.put("/pet/cadastro", values);
    }

    <div>
        <form action="submit">
            <div className="form-example">
                <label for="name">Nome: </label>
                <input type="text" name="name" id="name" required onChange={(t) => setName(t.target.value)}/>
            </div>
            <div className="form-example">
                <label for="raca">Raça: </label>
                <input type="tel" name="raca" id="raca" required  onChange={(t) => setRaca(t.target.value)}/>
            </div>
            <div className="form-example">
                <label for="especie">Espécie: </label>
                <input type="text" name="especie" id="especie" required onChange={(t) => setEspecie(t.target.value)}/>
            </div>
            <div className="form-example">
                <label for="tamanho">Tamanho: </label>
                <input type="tamanho" name="tamanho" id="tamanho" required onChange={(t) => setTamanho(t.target.value)}/>
            </div>
            <div className="form-example">
                <label for="peso">Peso: </label>
                <input type="txt" name="peso" id="peso" required onChange={(t) => setPeso(t.target.value)}/>
            </div>
            <div className="form-example">
                <label for="animal">Animal? </label>
                <input type="animal" name="animal" id="animal" required />
            </div>
            <div className="form-example">
                <input type="submit" value="Subscribe!" onClick={handleSubmit}/>
            </div>
        </form>
    </div>
};

export default CadastrarPet;