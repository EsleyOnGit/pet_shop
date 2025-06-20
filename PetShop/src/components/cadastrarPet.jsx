import { useState } from "react"
import api from "../api/api";

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
    const [id, setId] = useState('');
    const [nome, setNome] = useState('');
    const [raca, setRaca] = useState('');
    const [especie, setEspecie] = useState('');
    const [tamanho, setTamanho] = useState('');
    const [peso, setPeso] = useState('');
    const [idade, setIdade] = useState(0);
    const [id_cliente, setId_cliente] = useState(0);
    const [id_tipo_animal, setId_tipo_animal] = useState(0)

    const handleSubmit = async (e) => {
    e.preventDefault();
    setId(Date.now())
    const values = {
        id,
        nome,
        raca,
        especie,
        tamanho,
        peso,
        idade,
        id_cliente,
        id_tipo_animal
    };
    try {
        if (props.button === "cadastrar") {
            await api.post("/pet/cadastro", values);
        } else {
            await api.put("/pet/cadastro", values);
        }
        alert("Dados enviados com sucesso!");
    } catch (error) {
        console.error("Erro ao enviar dados:", error);
        alert("Erro ao enviar dados.");
    }
};

    return <div className="form-container">
        <h2>{props.button === "cadastrar" ? "Cadastrar Pet" : "Atualizar Pet"}</h2>
        <form onSubmit={handleSubmit}>
            <div className="form-example">
                <label htmlFor="name">Nome:</label>
                <input type="text" name="name" id="name" required onChange={(t) => setNome(t.target.value)}/>
            </div>
            <div className="form-example">
                <label htmlFor="raca">Raça: </label>
                <input type="tel" name="raca" id="raca" required  onChange={(t) => setRaca(t.target.value)}/>
            </div>
            <div className="form-example">
                <label htmlFor="especie">Espécie: </label>
                <input type="text" name="especie" id="especie" required onChange={(t) => setEspecie(t.target.value)}/>
            </div>
            <div className="form-example">
                <label htmlFor="tamanho">Tamanho: </label>
                <input type="tamanho" name="tamanho" id="tamanho" required onChange={(t) => setTamanho(Number(t.target.value))}/>
            </div>
            <div className="form-example">
                <label htmlFor="peso">Peso: </label>
                <input type="number" name="peso" id="peso" required onChange={(t) => setPeso(Number(t.target.value))}/>
            </div>
            <div className="form-example">
                <label htmlFor="idade">idade:</label>
                <input type="number" name="idade" id="idade" required onChange={(t) => setIdade(Number(t.target.value))}/>
            </div>
            <div className="form-example">
                <label htmlFor="dono_id">id do dono:</label>
                <input type="number" name="dono_id" id="dono_id" required onChange={(t) => setId_cliente(Number(t.target.value))}/>
            </div>
            <div className="form-example">
                <label htmlFor="tipo_animal_id">id do animal:</label>
                <input type="number" name="tipo_animal_id" id="tipo_animal_id" required onChange={(t) => setId_tipo_animal(Number(t.target.value))}/>
            </div>
            <div className="form-example">
                <button type="submit">{props.button}</button>
            </div>
        </form>
    </div>
};

export default CadastrarPet;