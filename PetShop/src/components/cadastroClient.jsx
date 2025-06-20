import { useState } from "react";
import api from "../api/api";
import CadastrarPet from "./cadastrarPet";
/**
 "nome": "Esley", 
  "email": "esley1@email.com", 
  "telefone": "7534342510",
  "rua": "minha casa",
  "numero": 123, 
  "cep": "470000000",
  "uf": "BR"
 */
const Cadastro = (props) =>{
    const [id, setId] = useState(0)
    const [nome,setNome] = useState('');
    const [telefone,setTelefone] = useState('');
    const [email,setEmail] = useState('');
    const [numero,setNumero] = useState('');
    const [rua,setRua] = useState('');
    const [cep,setCep] = useState('');
    const [uf,setUf] = useState('');
    
    function handleSubmit(event){
        
        event.preventDefault();
        setId(Date.now())
        if(props.button === "cadastrar"){
            const values = { id, nome, email, telefone, rua, numero, cep, uf };
            api.post("/usuario/cadastro", values);
            
        }else{
            const values = { nome, email, telefone, rua, numero, cep, uf };
            api.put("/user/:id", values);
        }
    }

    return (
        <div className="form-container">
            <h2>{props.button === "cadastrar" ? "Cadastrar Cliente" : "Atualizar Cliente"}</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-example">
                    <label htmlFor="name">Nome: </label>
                    <input type="text" id="name" required onChange={(t) => setNome(t.target.value)} />
                </div>
                <div className="form-example">
                    <label htmlFor="telefone">Telefone: </label>
                    <input type="tel" id="telefone" required onChange={(t) => setTelefone(t.target.value)} />
                </div>
                <div className="form-example">
                    <label htmlFor="email">Email: </label>
                    <input type="email" id="email" required onChange={(t) => setEmail(t.target.value)} />
                </div>
                
                <div className="form-example">
                    <label htmlFor="rua">endereço: </label>
                    <input type="text" id="rua" required onChange={(t) => setRua(t.target.value)} />
                </div>
                <div className="form-example">
                    <label htmlFor="numero">Numero: </label>
                    <input type="text" id="numero" required onChange={(t) => setNumero(t.target.value)} />
                </div>
                <div className="form-example">
                    <label htmlFor="cep">Cep: </label>
                    <input type="text" id="cep" required onChange={(t) => setCep(t.target.value)} />
                </div>
                <div className="form-example">
                    <label htmlFor="uf">Uf: </label>
                    <input type="text" id="uf" required onChange={(t) => setUf(t.target.value)} />
                </div>
                {
                    props.button === "editar" && 
                    <CadastrarPet />
                }
                <div className="form-example">
                    <input type="submit" value={props.button} />
                </div>
            </form>
        </div>
    );
}

export default Cadastro;