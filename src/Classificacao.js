import React, {useEffect, useState} from "react";
import ClassificacaoService from "./ClassificacaoService";

const Classificacao = () => {
  const [classificacaoList, setClassificacaoList] = useState([])
  const [placarJogoList, setPlacarJogoList] = useState([])
  const [placarJogadorList, setPlacarJogadorList] = useState([])
  var posicao = 0;
  const classificacaoService = ClassificacaoService();

    async function carregaClassificacao(){
        // setClassificacaoList(classificacaoService.listarClassificacao()) 
        const data = await classificacaoService.listarClassificacao()
        console.log(data)
        setClassificacaoList(data)
    }

    async function carregaPlacarJogo(){
      // setClassificacaoList(classificacaoService.listarClassificacao()) 
      const data = await classificacaoService.listarPlacarJogo()
      console.log(data)
      setPlacarJogoList(data)
  }


  async function carregaPlacarJogador(){
    // setClassificacaoList(classificacaoService.listarClassificacao()) 
    const data = await classificacaoService.listarPlacarJogador()
    console.log(data)
    setPlacarJogadorList(data)
}


  return (
    <div><button onClick={()=> carregaClassificacao()}>Classificacao</button><button onClick={()=> carregaPlacarJogo()}>Placar Jogo</button><button onClick={()=> carregaPlacarJogador()}>Placar Jogador</button>
        <div>
        
        
        {classificacaoList && classificacaoList.map(i => (
          <li>{++posicao} {i.nome} - {i.valorResultadoTotal}</li>
      ))}
      
      </div>
      <div>
      {placarJogoList && placarJogoList.map(i => (
          <li> {i.nomeJogador} - {i.palpite1} - {i.descricaoJogo} - {i.palpite2} = {i.valor}</li>
      ))}
      </div>

      <div>
      {placarJogadorList && placarJogadorList.map(i => (
          <li> {i.nomeJogador} - {i.palpite1} - {i.descricaoJogo} - {i.palpite2} = {i.valor}</li>
      ))}
      </div>
    </div>
  );
}


export default Classificacao