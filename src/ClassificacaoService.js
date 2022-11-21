import React, {useEffect, useState} from 'react';
import axios from 'axios'



export default function ClassificacaoService() {

    //   const [classificacaoList, setClassificacaoList] = useState([])

      const listarClassificacao = async () => {
        const data = await axios.get('http://132.226.160.86:8080/bolao/classificacao')
        return data.data;
      }

          
      return {listarClassificacao}
}


