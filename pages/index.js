import { filmes } from "../data/filmes.js"

function Home () {
    console.log(filmes)

const estiloImagem = {
    width: "300px"
}

    return <><h1>Filmes</h1>

    <ul>
        <li>
            <p>Título: {filmes[0].titulo}</p>
            <p>Ano: {filmes[0].ano}</p>
            <p>Gênero: {filmes[0].genero}</p>
            <p>Nota: {filmes[0].nota}</p>

            <img style= {estiloImagem} src= {filmes[0].poster}/>
        </li>    
        <li>
            <p>Título: {filmes[1].titulo}</p>
            <p>Ano: {filmes[1].ano}</p>
            <p>Gênero: {filmes[1].genero}</p>
            <p>Nota: {filmes[1].nota}</p>

            <img style= {estiloImagem} src= {filmes[1].poster}/>
        </li> 
        <li>
            <p>Título: {filmes[2].titulo}</p>
            <p>Ano: {filmes[2].ano}</p>
            <p>Gênero: {filmes[2].genero}</p>
            <p>Nota: {filmes[2].nota}</p>

            <img style= {estiloImagem} src= {filmes[2].poster}/>
        </li> 
        <li>
            <p>Título: {filmes[3].titulo}</p>
            <p>Ano: {filmes[3].ano}</p>
            <p>Gênero: {filmes[3].genero}</p>
            <p>Nota: {filmes[3].nota}</p>

            <img style= {estiloImagem} src= {filmes[3].poster}/>
            <li>
            <p>Título: {filmes[4].titulo}</p>
            <p>Ano: {filmes[4].ano}</p>
            <p>Gênero: {filmes[4].genero}</p>
            <p>Nota: {filmes[4].nota}</p>

            <img style= {estiloImagem} src= {filmes[4].poster}/>
        </li> 
        <li>
            <p>Título: {filmes[5].titulo}</p>
            <p>Ano: {filmes[5].ano}</p>
            <p>Gênero: {filmes[5].genero}</p>
            <p>Nota: {filmes[5].nota}</p>

            <img style= {estiloImagem} src= {filmes[5].poster}/>
        </li> 
        </li> 
    </ul></>
}
export default Home;