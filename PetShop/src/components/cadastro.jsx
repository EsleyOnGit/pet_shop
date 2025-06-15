const Cadastro = (props) =>{
    return(
        <div>
            <form action="submit">
                <div className="form-example">
                    <label for="name">Nome: </label>
                    <input type="text" name="name" id="name" required />
                </div>
                <div className="form-example">
                    <label for="telefone">Telefone: </label>
                    <input type="tel" name="telefone" id="telefone" required />
                </div>
                <div className="form-example">
                    <label for="email">Email: </label>
                    <input type="text" name="email" id="email" required />
                </div>
                <div className="form-example">
                    <label for="password">Senha: </label>
                    <input type="password" name="password" id="password" required />
                </div>
                <div className="form-example">
                    <label for="ablepasswd">Confirmar Senha: </label>
                    <input type="password" name="ablepasswd" id="ablepasswd" required />
                </div>
                <div className="form-example">
                    <input type="submit" value="Subscribe!" />
                </div>
            </form>
        </div>
    )
}

export default Cadastro;