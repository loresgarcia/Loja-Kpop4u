import "./Cabecalho.css";

export default function Cabecalho() {
    return (
        <div className="cabecalho">
            <img classname="cabecalho__logo" src="/imagens/kpop4u.svg" alt="logo kpop4u" />
            <p className="cabecalho__item">Início</p>
            <p className="cabecalho__item">Categorias</p>
            <p className="cabecalho__item">Sobre Nós</p>
            <p className="cabecalho__item">Contato</p>
            <img className="cabecalho__perfil" src="/imagens/pessoa.svg" alt="icone de pessoa" />
            <img className="cabecalho__carrinho"src="/imagens/carrinho.svg" alt="icone de carrinho" />
        </div>
    )
}
