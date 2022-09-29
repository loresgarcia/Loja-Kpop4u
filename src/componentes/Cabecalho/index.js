import "./Cabecalho.css";
import { Person, ShoppingCart } from "@mui/icons-material";

export default function Cabecalho() {
    return (
        <div className="cabecalho">
            <img classname="cabecalho__logo" src="/imagens/kpop4u.svg" alt="logo kpop4u" />
            <p className="cabecalho__item">Início</p>
            <p className="cabecalho__item">Categorias</p>
            <p className="cabecalho__item">Sobre Nós</p>
            <p className="cabecalho__item">Contato</p>
            <Person className="cabecalho__perfil" />
            <ShoppingCart className="cabecalho__carrinho" />
        </div>
    )
}
