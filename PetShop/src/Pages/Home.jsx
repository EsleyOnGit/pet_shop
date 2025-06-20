import "./home.module.styles.css";

const Home = () =>{
    
    return(
        <>
        <body>
            <header>
                <nav>
                    <ul className="nav-links">
                        <li><a href="#inicio" className="nav-links a">Início</a></li>
                        <li><a href="/pets" className="nav-links a">Todos os Pets</a></li>
                        <li><a href="/usuarios" className="nav-links a">todos usuários</a></li>
                        <li><a href="/atualizar/pet/:id" className="nav-links a">Editar pet</a></li>
                        <li><a href="/atualizar/usuario/:id" className="nav-links a">Editar usuário</a></li>
                    </ul>
                </nav>
            </header>

            <main>
                <section className="hero" id="inicio">
                    <button className="nav-arrow left">‹</button>
                    <button className="nav-arrow right">›</button>
                    
                    <div className="hero-content">
                        <div className="hero-text">
                            <div className="club-info">
                                <h2>Petshop</h2>
                                <p>Faça parte do <span className="highlight">"PetShop da uneb"</span> e fique por dentro de todas <span className="highlight">novidades</span> e <span className="highlight">descontos</span> imperdíveis!</p>
                            </div>
                            <h1>Porque seu pet é único</h1>
                            <p className="subtitle">e nossos produtos também!</p>
                        </div>
                        
                        <div className="hero-image">
                            <div className="pet-image"></div>
                        </div>
                    </div>
                </section>

                <section className="services" id="services">
                    <div className="services-container">
                        <h2>Nossos Serviços</h2>
                        <div className="services-grid">
                            <div className="service-card">
                                <h3>🐱 Para Gatos</h3>
                                <p>Ração premium, petiscos, brinquedos e acessórios especiais para felinos. Tudo que seu gatinho precisa para ser feliz!</p>
                            </div>
                            <div className="service-card">
                                <h3>🐕 Para Cachorros</h3>
                                <p>Produtos selecionados para cães de todos os tamanhos. Alimentação, higiene, brinquedos e muito mais!</p>
                            </div>
                            <div className="service-card">
                                <h3>💖 Preferidos dos Peludos</h3>
                                <p>Os produtos mais amados pelos pets! Seleção especial com os itens que fazem maior sucesso.</p>
                            </div>
                            <div className="service-card">
                                <h3>🏷️ Promoções Especiais</h3>
                                <p>Descontos exclusivos para membros do Meowclube. Ofertas mensais imperdíveis!</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer>
                <p>&copy; 2025 Meowclube - Pet Shop. Todos os direitos reservados.</p>
                <p>Feito com ❤️ para seu pet!</p>
            </footer>

            <div className="whatsapp-btn"></div>
        </body>
    </>
    )
}

export default Home;

/*
/posts	100 posts
/comments	500 comments
/albums	100 albums
/photos	5000 photos
/todos	200 todos
/users	10 users
GET	/posts
GET	/posts/1
GET	/posts/1/comments
GET	/comments?postId=1
POST	/posts
PUT	/posts/1
PATCH	/posts/1
DELETE	/posts/1
*/