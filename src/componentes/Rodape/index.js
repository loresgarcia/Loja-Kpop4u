import "./Rodape.css";

export default function Rodape() {
  return (
    <section className="rodape">
      <div className="rodape__conteudo">
        <img src="/imagens/logoverde.svg" alt="Logo da Kpop4U" />
        <div className="rodape__menu">
          <p>Trabalhe conosco</p>
          <p>Contato</p>
          <p>Blog</p>
          <p>Novidades</p>
        </div>
        <div className="rodape__contato">
          <p>Sac: (XX) XXXX-XXXX</p>
          <p>Email: sac@kpop4u.com.br</p>
          <div className="rodape__social">
            <img src="/imagens/twitter.png" alt="" />
            <img src="/imagens/instagram.png" alt="" />
            <img src="/imagens/facebook.png" alt="" />
            <img src="/imagens/tik-tok.png" alt="" />
          </div>
        </div>
        <div className="rodape__endereco">
          <p>
            Av. Paulista, 900 <br />
            1º andar <br />
            Bela Vista <br />
            São Paulo - São Paulo
          </p>
        </div>
      </div>
    </section>
  );
}
