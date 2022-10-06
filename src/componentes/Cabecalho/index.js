import "./Cabecalho.css";
import { Person, ShoppingCart } from "@mui/icons-material";

export default function Cabecalho({ setMenuCategoriasAtivo, menuCategoriasAtivo, setLoginAtivo }) {
    return (
        <div className="cabecalho">
            <img className="cabecalho__logo" src="/imagens/kpop4u.svg" alt="logo kpop4u" />
            <p className="cabecalho__item">Início</p>
            <p className="cabecalho__item" onClick={() => setMenuCategoriasAtivo(!menuCategoriasAtivo)}>Categorias</p>
            <p className="cabecalho__item">Sobre Nós</p>
            <p className="cabecalho__item">Contato</p>
            <p className="cabecalho__visitante">Olá, Visitante!</p>
            <Person className="cabecalho__perfil" onClick={() => setLoginAtivo(true)} />
            <ShoppingCart className="cabecalho__carrinho" />
        </div>
    )
}
