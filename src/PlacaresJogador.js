import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { URLENV } from './CONSTANTS';




const PlacaresJogador = () => {
    
    const [placaresJogadorLista, setPlacaresJogadorLista] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const {idBolao, idJogador} = useParams()

    
    
    useEffect(() => {
        
        setIsLoading(true)
        axios.get(`${URLENV}/${idBolao}/placar/jogador/${idJogador}`)
            .then(response => {
                console.log(response.data)
                setPlacaresJogadorLista(response.data)
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
                {placaresJogadorLista && placaresJogadorLista.map((j) => (                    
                    <li className={`list-group-item d-flex justify-content-between align-items-center`} key={j}>
                     <Link to={`../placaresJogo/${j.idJogo}`}> {j.nomeJogador} - {j.palpite1} - {j.descricaoJogo} - {j.palpite2}</Link>
                       - <span className="badge bg-primary rounded-pill">{j.valor}</span>
                    </li>                    
                ))}
                </ul>
            </div>

    )
}

export default PlacaresJogador