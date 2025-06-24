import { useEffect, useState } from "react"
import api from "../api/api";
import { useParams } from "react-router-dom";

/**
  `ID` int NOT NULL,
  `nome` varchar(20) COLLATE utf8mb4_general_ci NOT NULL,
  `idade` int DEFAULT NULL,
  `id_cliente` int NOT NULL,
  `id_tipo_animal` int NOT NULL,
  PRIMARY KEY (`my_row_id`)
-------------------------------------------
CREATE TABLE `tipo_animal` (
  `my_row_id` bigint unsigned NOT NULL AUTO_INCREMENT /*!80023 INVISIBLE,
  `ID` int NOT NULL,
  `descricao` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `raca` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `nome` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `especie` varchar(20) COLLATE utf8mb4_general_ci DEFAULT NULL,
 */
const CadastrarPet = (props) =>{
    let { id } = useParams();
    const [nome, setNome] = useState('');
    const [raca, setRaca] = useState('');
    const [especie, setEspecie] = useState('');
    const [idade, setIdade] = useState(0);
    const [id_cliente, setId_cliente] = useState(0);
    const [id_tipo_animal, setId_tipo_animal] = useState(0)
    let [dados, setDados] = useState([])

    const handleSubmit = async (e) => {
    e.preventDefault();
    
    const values = {
        nome,
        raca,
        especie,
        idade,
        id_cliente,
        id_tipo_animal
    };
    try {
        if (props.button === "cadastrar") {
            await api.post("/pet/cadastro", values);
            console.log("pet cadastrado com sucesso!");
        } else {
            await api.put("/pet/"+id, values);
            console.log("pet atualizado com sucesso!");
        }
    } catch (error) {
        console.error("Erro ao enviar dados:", error);
    }
};

    async function getValues() {
        const data = await api.get('/pet/'+ id);
        console.log(data.data)
        setDados(data.data)
        return data
    }

    useEffect(()=>{
        getValues();
    },[])

    return <div className="form-container">
        <h2>{props.button === "cadastrar" ? "Cadastrar Pet" : "Atualizar Pet"}</h2>
        <form onSubmit={handleSubmit}>
            <div className="form-example">
                <label htmlFor="name">Nome:</label>
                <input type="text" name="name" id="name" required placeholder={dados.nome}
                onChange={(t) => setNome(t.target.value)}/>
            </div>
            <div className="form-example">
                <label htmlFor="raca">Raça: </label>
                <input type="tel" name="raca" id="raca" required  placeholder={dados.raca}
                onChange={(t) => setRaca(t.target.value)}/>
            </div>
            <div className="form-example">
                <label htmlFor="especie">Espécie: </label>
                <input type="text" name="especie" id="especie" required placeholder={dados.descricao}
                onChange={(t) => setEspecie(t.target.value)}/>
            </div>
            
            <div className="form-example">
                <label htmlFor="idade">idade:</label>
                <input type="number" name="idade" id="idade" required placeholder={dados.idade}
                onChange={(t) => setIdade(Number(t.target.value))}/>
            </div>
            <div className="form-example">
                <label htmlFor="dono_id">id do dono:</label>
                <input type="number" name="dono_id" id="dono_id" required placeholder={dados.id_cliente}
                onChange={(t) => setId_cliente(Number(t.target.value))}/>
            </div>
            <div className="form-example">
                <label htmlFor="tipo_animal_id">id tipo Animal:</label>
                <input type="number" name="tipo_animal_id" id="tipo_animal_id" required placeholder={dados.id_cliente}
                onChange={(t) => setId_tipo_animal(Number(t.target.value))}/>
            </div>

            <div className="form-example">
                <button type="submit">{props.button}</button>
            </div>
        </form>
    </div>
};

export default CadastrarPet;