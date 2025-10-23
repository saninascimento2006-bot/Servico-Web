import { useState } from "react";

export default function CardFilme({ filme }) {

  const [hover, setHover] = useState(false);

  const estiloCardFilme = {
    width: "100%",
    height: "100%", 
    borderRadius: "8px",
    overflow: "hidden",
    position: "relative",
    cursor: "pointer",
  };


  const estiloImagem = {
    width: "100%",
    height: hover ? "110%" : "100%",
    objectFit: "cover",
    opacity: hover ? 0.7 : 1, // <-- efeito hover
    transition: "height 0.3s ease", // animação suave
  };

  const estiloConteinerInfoFilme = {
    color: "#ffffff",
    position: "absolute",
    bottom: 0,
    background: "linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.9))",
    height: "200px",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "end",
    padding: "10px",
  };

  return (
    <li
      style={estiloCardFilme}
      onMouseEnter={() => setHover(true)}   // ativa o hover
      onMouseLeave={() => setHover(false)} // desativa o hover
    >
      <img style={estiloImagem} src={filme.poster} alt={filme.titulo} />

      <div style={estiloConteinerInfoFilme}>
        <p><strong>Título:</strong> {filme.titulo}</p>
        <p><strong>Ano:</strong> {filme.ano}</p>
        <p><strong>Gênero:</strong> {filme.genero}</p>
        <p><strong>Nota:</strong> {filme.nota}</p>
      </div>
    </li>
  );
}
