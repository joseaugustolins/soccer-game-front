import React, {useEffect, useState} from 'react';
import axios from 'axios'



export default function ClassificacaoService() {

    //   const [classificacaoList, setClassificacaoList] = useState([])

      const listarClassificacao = async () => {
        const data = await axios.get('https://132.226.160.86:8080/bolao/classificacao')
        // const data = await axios.get('http://132.226.160.86:8080/bolao/classificacao')
        return data.data;
      }


      const listarPlacarJogo = async () => {
        const data = await axios.get('https://132.226.160.86:8080/bolao/placar/jogo/8')
        // const data = await axios.get('http://132.226.160.86:8080/bolao/classificacao')
        return data.data;
      }

      const listarPlacarJogador = async () => {
        const data = await axios.get('https://132.226.160.86:8080/bolao/placar/jogador/1')
        // const data = await axios.get('http://132.226.160.86:8080/bolao/classificacao')
        return data.data;
      }

      
      return {listarClassificacao, listarPlacarJogo, listarPlacarJogador}
}


