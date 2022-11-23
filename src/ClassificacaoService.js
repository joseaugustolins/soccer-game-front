import React, {useEffect, useState} from 'react';
import axios from 'axios'



export default function ClassificacaoService() {

    //   const [classificacaoList, setClassificacaoList] = useState([])

      const listarClassificacao = async () => {
        const data = await axios.get('https://132.226.160.86:443/bolao/classificacao')
        // const data = await axios.get('http://132.226.160.86:8080/bolao/classificacao')
        return data.data;
      }


      const listarPlacarJogo = async (idJogo) => {
        // const data = await axios.get(`https://132.226.160.86:8080/bolao/placar/jogo/${idJogo}`)
        const data = await axios.get(`http://132.226.160.86:8080/bolao/placar/jogo/25`)
        
        return data.data;
      }

      const listarPlacarJogador = async (idJogador) => {
        const data = await axios.get(`https://132.226.160.86:8080/bolao/placar/jogador/1`)
        // const data = await axios.get('http://132.226.160.86:8080/bolao/classificacao')
        return data.data;
      }

      
      return {listarClassificacao, listarPlacarJogo, listarPlacarJogador}
}


