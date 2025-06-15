const Login = () =>{
    return (
        <div>
            <form action="submit">
                <div className="form-example">
                    <label for="name">email: </label>
                    <input type="text" name="name" id="name" required />
                </div>
                <div className="form-example">
                    <label for="senha">senha: </label>
                    <input type="password" name="senha" id="senha" required />
                </div>
                
                <div className="form-example">
                    <input type="submit" value="Subscribe!" />
                </div>
            </form>
        </div>
    )
};

export default Login;