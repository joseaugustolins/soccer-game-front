import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { URLENV } from './CONSTANTS';




const Jogo = () => {        
    const [jogosLista, setJogosLista] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    

    useEffect(() => {
        setIsLoading(true)
        axios.get(`${URLENV}/jogo`)
            .then(response => {
                console.log(response.data)
                setJogosLista(response.data)
                setIsLoading(false)
            })
    
    },[])

    
    return (

            isLoading?<div><div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          </div>:
            <div>
            <caption>Jogos</caption>
            <table className="table table-striped table-hover">
                
                <thead><tr><th>#</th><th>Data</th></tr></thead>
                <tbody>
                {jogosLista && jogosLista.map((j) => (
                    <tr key={j.id}><td><Link to={`../placaresJogo/${j.id}`}>{j.valor1} - {j.nome} - {j.valor2}</Link></td><td>{j.diaMes} - {j.horario}</td></tr>
                ))}
                </tbody>
                </table>
            </div>    


        

    )
}

export default Jogo