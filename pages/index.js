import { filmes } from "../data/filmes.js"

function Home () {
    console.log(filmes)

  const estiloLista = {
    display: "flex",
    flexDirection: "row",
    gap: "20px",
    listStyle: "none",
    padding: "20px",
    margin: 0,
    overflowX: "auto", 
    whiteSpace: "nowrap",
  };

  const estiloItem = {
    flex: "0 0 auto", 
    width: "300px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "16px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    backgroundColor: "#fff",
  };

const estiloImagem = {
    width: "300px"
}

    return <><h1>Filmes</h1>



    <ul>
        {
            filmes.map((filme) =>{
                return ( <li key={`card-filmes-${filme.id}`}>
                            <p>Título: {filme.titulo}</p>
                            <p>Ano: {filme.ano}</p>
                            <p>Gênero: {filme.genero}</p>
                            <p>Nota: {filme.nota}</p>
                
                            <img style= {estiloImagem} src= {filme.poster}/>
                        </li>    
                );
            })
        }
    </ul></>
}
export default Home;