import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { URLENV } from './CONSTANTS';





const PlacaresJogo = () => {    
 
    const [placaresJogoLista, setPlacaresJogoLista] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const {idBolao, idJogo} = useParams()

    useEffect(() => {
        setIsLoading(true)
        axios.get(`${URLENV}/${idBolao}/placar/jogo/${idJogo}`)
            .then(response => {
                var data = response.data;
                data.sort((a,b) => a.valor>b.valor?-1:1)
                console.log(data)
                
                setPlacaresJogoLista(response.data)
                setIsLoading(false)
            })
        
    }, [])

    
 

    
    return (
        isLoading?<div><div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      </div>:
        <div className="list-group">
        <ul className="list-group">
            {placaresJogoLista && placaresJogoLista.map((j) => (
                <li className={`list-group-item d-flex justify-content-between align-items-center`} key={j}>
                 <Link to={`../placaresJogador/${j.idJogador}`}>   {j.nomeJogador} - {j.palpite1} - {j.descricaoJogo} - {j.palpite2} </Link> - <span className="badge bg-primary rounded-pill">{j.valor}</span>                
                </li>
            ))}
        </ul>
        </div>

    )
}

export default PlacaresJogo