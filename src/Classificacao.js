import React, {useEffect, useState} from "react";
import ClassificacaoService from "./ClassificacaoService";

const Classificacao = () => {
  const [classificacaoList, setClassificacaoList] = useState([])
  var posicao = 0;
  const classificacaoService = ClassificacaoService();

    async function carregaClassificacao(){
        // setClassificacaoList(classificacaoService.listarClassificacao()) 
        const data = await classificacaoService.listarClassificacao()
        console.log(data)
        setClassificacaoList(data)
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