import { useEffect, useState } from "react";
import api from "../api/api";
import CadastrarPet from "./cadastrarPet";
import { useParams } from "react-router";

const Cadastro = (props) =>{
    const [ID, setId] = useState(0)
    const [nome,setNome] = useState('');
    const [telefone,setTelefone] = useState('');
    const [email,setEmail] = useState('');
    const [numero,setNumero] = useState('');
    const [rua,setRua] = useState('');
    const [cep,setCep] = useState('');
    const [uf,setUf] = useState('');
    let [datas, setDatas] = useState({})

    
    let { id } = useParams()
    function handleSubmit(event){
        
        event.preventDefault();
        setId(Date.now())
        if(props.button === "cadastrar"){
            const values = { ID, nome, email, telefone, rua, numero, cep, uf };
            api.post("/usuario/cadastro", values);
            console.log(values)
            
        }else{
            const values = { nome, email, telefone, rua, numero, cep, uf };
            api.put("/usuario/"+id, values);
            console.log(event, values)
        }
    }

    
    let params = useParams()
    async function getValues() {
        const data = await api.get('/usuario/'+ params.id);
        console.log(data.data)
        setDatas(data.data)
        return data
    }

    useEffect(()=>{
        getValues();
    },[])

    return (
        <div className="form-container">
            <h2>{props.button === "cadastrar" ? "Cadastrar Cliente" : "Atualizar Cliente"}</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-example">
                    <label htmlFor="name">Nome: </label>
                    <input type="text" id="name" required placeholder={datas.nome}
                    onChange={(t) => setNome(t.target.value)} 
                    />
                </div>
                <div className="form-example">
                    <label htmlFor="telefone">Telefone: </label>
                    <input type="tel" id="telefone" required placeholder={datas.telefone}
                    onChange={(t) => setTelefone(t.target.value)} />
                </div>
                <div className="form-example">
                    <label htmlFor="email">Email: </label>
                    <input type="email" id="email" required placeholder={datas.email}
                    onChange={(t) => setEmail(t.target.value)} />
                </div>
                
                <div className="form-example">
                    <label htmlFor="rua">endereço: </label>
                    <input type="text" id="rua" required placeholder={datas.rua}
                    onChange={(t) => setRua(t.target.value)} />
                </div>
                <div className="form-example">
                    <label htmlFor="numero">Numero: </label>
                    <input type="text" id="numero" required placeholder={datas.numero}
                    onChange={(t) => setNumero(t.target.value)} />
                </div>
                <div className="form-example">
                    <label htmlFor="cep">Cep: </label>
                    <input type="text" id="cep" required placeholder={datas.cep}
                    onChange={(t) => setCep(t.target.value)} />
                </div>
                <div className="form-example">
                    <label htmlFor="uf">Uf: </label>
                    <input type="text" id="uf" required placeholder={datas.estado}
                    onChange={(t) => setUf(t.target.value)} />
                </div>
                <div className="form-example">
                    <input type="submit" value={props.button} />
                </div>  
            </form>
        </div>
    );
}

export default Cadastro;