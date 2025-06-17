import { useState } from "react";
import api from "../api/api";

const Cadastro = (props) =>{
    const [nome,setNome] = useState('');
    const [telefone,setTelefone] = useState('');
    const [email,setEmail] = useState('');
    const [senha,setSenha] = useState('');
    const [animal,setAnimal] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    
    function handleSubmit(event){
        event.preventDefault();
        if(props.button === "cadastrar"){
            if(confirmarSenha === senha){
                const values = { nome, telefone, email, senha, animal };
                api.post("/user/cadastrar", values);
            }
            else{
                console.log("As senhas não são iguais")
            }
        }else{
             const values = { nome, telefone, email, senha, animal };
                api.put("/user/:id", values);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="div-itens">
                    <label htmlFor="name">Nome: </label>
                    <input type="text" id="name" required onChange={(t) => setNome(t.target.value)} />
                </div>
                <div className="div-itens">
                    <label htmlFor="telefone">Telefone: </label>
                    <input type="tel" id="telefone" required onChange={(t) => setTelefone(t.target.value)} />
                </div>
                <div className="div-itens">
                    <label htmlFor="email">Email: </label>
                    <input type="email" id="email" required onChange={(t) => setEmail(t.target.value)} />
                </div>
                <div className="div-itens">
                    <label htmlFor="password">Senha: </label>
                    <input type="password" id="password" required onChange={(t) => setSenha(t.target.value)} />
                </div>
                { props.button === "cadastrar" ?
                <div className="div-itens">
                    <label htmlFor="ablepasswd">Confirmar Senha: </label>
                    <input type="password" id="ablepasswd" required onChange={(t) => setConfirmarSenha(t.target.value)} />
                </div> : ""
                }
                <div className="div-itens">
                    <label htmlFor="animal">Animal? </label>
                    <input type="text" id="animal" required onChange={(t) => setAnimal(t.target.value)} />
                </div>
                <div className="div-itens">
                    <input type={props.button} value="Subscribe!" />
                </div>
            </form>
        </div>
    );
}

export default Cadastro;