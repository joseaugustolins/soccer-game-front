import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { URLENV } from './CONSTANTS';




const Classificacao = () => {    
    const [classificacalLista, setClassificacaoLista] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const {idBolao} = useParams()

    useEffect(() => {
        setIsLoading(true)
        
        axios.get(`${URLENV}/${idBolao}/classificacao`)
            .then(response => {
                console.log(response.data)
                setClassificacaoLista(response.data)
                setIsLoading(false)
            })
    
    },[])

    var i =0;
    return (

            isLoading?<div><div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          </div>:
            <div>
            <label>Classificação Geral</label>
            <table className="table table-striped table-hover">                
                <thead><tr><th>#</th><th>Nome</th><th>Pontuação</th></tr></thead>
                <tbody>
                {classificacalLista && classificacalLista.map((c) => (
                    // <tr key={c.idJogador}><td>{++i}</td> <td onClick={()=> {navigate(`placaresJogador/${c.idJogador}`)}}>{c.nome} - {c.artilheiro}</td><td>{c.valorJogos}+{c.valorArtilheiro} = *{c.valorResultadoTotal}*</td></tr>
                    idBolao==1?                    
                    <tr key={c.idJogador}><td>{++i}</td> <td><Link to={`placaresJogador/${c.idJogador}`}>{c.nome} - {c.artilheiro}</Link></td><td>{c.valorJogos}+{c.valorArtilheiro} = <span class="badge bg-primary rounded-pill">{c.valorResultadoTotal}</span></td></tr>
                    :
                    <tr key={c.idJogador}><td>{++i}</td> <td><Link to={`placaresJogador/${c.idJogador}`}>{c.nome}</Link></td><td><span class="badge bg-primary rounded-pill">{c.valorJogos}</span></td></tr>
                ))}
                </tbody>
                </table>
            </div>    


        

    )
}

export default Classificacao