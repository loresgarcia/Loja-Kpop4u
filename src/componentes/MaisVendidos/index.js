import Card from "../Card";
import "./MaisVendidos.css";

export default function MaisVendidos() {
    const listaDeAlbuns = [
        {
            grupo: "Twice",
            album: "Between 1 & 2",
            preco: "75,00",
            imagem: "/imagens/imgcard.png",
        },
        {
            grupo: "Loona",
            album: "++",
            preco: "60,00",
            imagem: "/imagens/loona.png",
        },
        {
            grupo: "SNSD",
            album: "Forever1",
            preco: "40,00",
            imagem: "/imagens/snsd.png",
        },
        {
            grupo: "Ive",
            album: "Love Dive",
            preco: "75,00",
            imagem: "/imagens/ive.jpg",
        },
        {
            grupo: "Cherry Bullet",
            album: "Cherry Wish",
            preco: "40,00",
            imagem: "/imagens/cherrybullet.jpg",
        },
        {
            grupo: "Apink",
            album: "HORN",
            preco: "65,00",
            imagem: "/imagens/apink.png",
        },
    ]
    return (
        <div className="mais-vendidos">
        <h3 className="mais-vendidos__titulo">Mais Vendidos</h3>
            <div className="mais-vendidos__cards">
                {listaDeAlbuns.map((item, id) => <Card key={id} grupo={item.grupo} album={item.album} preco={item.preco} imagem={item.imagem} />)}
            </div>
        </div>
    )
}