import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { URLENV } from './CONSTANTS';




const Jogador = () => {        
    const [jogadorLista, setJogadorLista] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    

    useEffect(() => {
        setIsLoading(true)
        axios.get(`${URLENV}/jogador/1`)
            .then(response => {
                console.log(response.data)
                setJogadorLista(response.data)
                setIsLoading(false)
            })
    
    },[])

    
    return (

            isLoading?<div><div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          </div>:
            <div>
            <caption>Jogador</caption>
            <table className="table table-striped table-hover">
                
                <thead><tr><th>#</th><th>Data</th></tr></thead>
                <tbody>
                {jogadorLista && jogadorLista.map((j) => (
                    <tr key={j.id}><td>{j.nome}</td></tr>
                ))}
                </tbody>
                </table>
            </div>    


        

    )
}

export default Jogador