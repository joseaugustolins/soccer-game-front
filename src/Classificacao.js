import React, {useEffect, useState} from "react";
import ClassificacaoService from "./ClassificacaoService";

const Classificacao = () => {
  const [classificacaoList, setClassificacaoList] = useState([])
  var posicao = 0;
  const classificacaoService = ClassificacaoService();

    function carregaClassificacao(){
        // setClassificacaoList(classificacaoService.listarClassificacao()) 
        setClassificacaoList([
            {
                "idJogador": 31,
                "nome": "Andre",
                "artilheiro": "Neymar",
                "time": "Brasil",
                "valorJogos": 10,
                "valorArtilheiro": 0,
                "valorTime": 0,
                "valorResultadoTotal": 10
            },
            {
                "idJogador": 29,
                "nome": "Ana Paula",
                "artilheiro": "Vinínius JR",
                "time": "Brasil",
                "valorJogos": 10,
                "valorArtilheiro": 0,
                "valorTime": 0,
                "valorResultadoTotal": 10
            },
            {
                "idJogador": 5,
                "nome": "Henrique (quiquiqui)",
                "artilheiro": "Mbappe",
                "time": "Argentina",
                "valorJogos": 10,
                "valorArtilheiro": 0,
                "valorTime": 0,
                "valorResultadoTotal": 10
            },
            {
                "idJogador": 4,
                "nome": "Beto Luna",
                "artilheiro": "Pedro",
                "time": "Inglaterra",
                "valorJogos": 10,
                "valorArtilheiro": 0,
                "valorTime": 0,
                "valorResultadoTotal": 10
            },
            {
                "idJogador": 1,
                "nome": "Guga",
                "artilheiro": "Harry Kane",
                "time": "Brasil",
                "valorJogos": 6,
                "valorArtilheiro": 0,
                "valorTime": 0,
                "valorResultadoTotal": 6
            },
            {
                "idJogador": 8,
                "nome": "Rodolfo",
                "artilheiro": "Richarlison",
                "time": "Brasil",
                "valorJogos": 6,
                "valorArtilheiro": 0,
                "valorTime": 0,
                "valorResultadoTotal": 6
            },
            {
                "idJogador": 11,
                "nome": "Gabriel",
                "artilheiro": "Richarlison",
                "time": "Brasil",
                "valorJogos": 6,
                "valorArtilheiro": 0,
                "valorTime": 0,
                "valorResultadoTotal": 6
            },
            {
                "idJogador": 21,
                "nome": "Rafa",
                "artilheiro": "Mbappe",
                "time": "Brasil",
                "valorJogos": 6,
                "valorArtilheiro": 0,
                "valorTime": 0,
                "valorResultadoTotal": 6
            },
            {
                "idJogador": 22,
                "nome": "Felipe",
                "artilheiro": "Messi",
                "time": "Brasil",
                "valorJogos": 6,
                "valorArtilheiro": 0,
                "valorTime": 0,
                "valorResultadoTotal": 6
            },
            {
                "idJogador": 23,
                "nome": "Joao",
                "artilheiro": "Neymar",
                "time": "Brasil",
                "valorJogos": 6,
                "valorArtilheiro": 0,
                "valorTime": 0,
                "valorResultadoTotal": 6
            },
            {
                "idJogador": 24,
                "nome": "Synara",
                "artilheiro": "Neymar",
                "time": "Brasil",
                "valorJogos": 6,
                "valorArtilheiro": 0,
                "valorTime": 0,
                "valorResultadoTotal": 6
            },
            {
                "idJogador": 2,
                "nome": "Ana Cláudia",
                "artilheiro": "Harry Kane",
                "time": "Brasil",
                "valorJogos": 6,
                "valorArtilheiro": 0,
                "valorTime": 0,
                "valorResultadoTotal": 6
            },
            {
                "idJogador": 3,
                "nome": "Eduardo",
                "artilheiro": "Richarlison",
                "time": "Brasil",
                "valorJogos": 6,
                "valorArtilheiro": 0,
                "valorTime": 0,
                "valorResultadoTotal": 6
            },
            {
                "idJogador": 26,
                "nome": "Mario",
                "artilheiro": "Richarlison",
                "time": "Argentina",
                "valorJogos": 4,
                "valorArtilheiro": 0,
                "valorTime": 0,
                "valorResultadoTotal": 4
            },
            {
                "idJogador": 27,
                "nome": "Luzia",
                "artilheiro": "Neymar",
                "time": "Brasil",
                "valorJogos": 4,
                "valorArtilheiro": 0,
                "valorTime": 0,
                "valorResultadoTotal": 4
            },
            {
                "idJogador": 28,
                "nome": "Rebecca",
                "artilheiro": "Cristiano Ronaldo ",
                "time": "Brasil",
                "valorJogos": 4,
                "valorArtilheiro": 0,
                "valorTime": 0,
                "valorResultadoTotal": 4
            },
            {
                "idJogador": 25,
                "nome": "Riquinho",
                "artilheiro": "Lukaku",
                "time": "Argentina",
                "valorJogos": 4,
                "valorArtilheiro": 0,
                "valorTime": 0,
                "valorResultadoTotal": 4
            },
            {
                "idJogador": 30,
                "nome": "Rita",
                "artilheiro": "Neymar",
                "time": "Brasil",
                "valorJogos": 0,
                "valorArtilheiro": 0,
                "valorTime": 0,
                "valorResultadoTotal": 0
            },
            {
                "idJogador": 6,
                "nome": "Luiz",
                "artilheiro": "Neymar",
                "time": "Brasil",
                "valorJogos": 0,
                "valorArtilheiro": 0,
                "valorTime": 0,
                "valorResultadoTotal": 0
            },
            {
                "idJogador": 7,
                "nome": "Marcel",
                "artilheiro": "Mbappe",
                "time": "Brasil",
                "valorJogos": 0,
                "valorArtilheiro": 0,
                "valorTime": 0,
                "valorResultadoTotal": 0
            },
            {
                "idJogador": 9,
                "nome": "Rodrigo",
                "artilheiro": "Neymar",
                "time": "Brasil",
                "valorJogos": 0,
                "valorArtilheiro": 0,
                "valorTime": 0,
                "valorResultadoTotal": 0
            },
            {
                "idJogador": 10,
                "nome": "Thelma",
                "artilheiro": "Vinínius JR",
                "time": "Argentina",
                "valorJogos": 0,
                "valorArtilheiro": 0,
                "valorTime": 0,
                "valorResultadoTotal": 0
            }
        ])
    }

  return (
    <div>
        <button onClick={()=> carregaClassificacao()}>Carregar</button>
        
        {classificacaoList && classificacaoList.map(i => (
          <li>{++posicao} {i.nome} - {i.valorResultadoTotal}</li>
      ))}
    </div>
  );
}


export default Classificacao