import "./Rodape.css"

const Rodape = () => {
    return(
        <footer className="rodape">
            <div className="imagens-redes">
                <a href="facebok.com" target="_blank"><img src="\imagens\fb.png"></img></a>
                <a href="twitter.com" target="_blank"><img src="\imagens\tw.png"></img></a>
                <a href="instagram.com" target="_blank"><img src="\imagens\ig.png"></img></a>
            </div>
            <div>
                <img src="/imagens/logo.png"></img>
            </div>
            <div>
                <a className="desenvol" href="https://github.com/carlosiego" target="_blank">Desenvolvido por Carlos Iego</a>
            </div>
        </footer>
    )
}

export default Rodape