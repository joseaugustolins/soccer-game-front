import Classificacao from "./Classificacao";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams
} from "react-router-dom";
import PlacaresJogo from "./PlacaresJogo";
import PlacaresJogador from "./PlacaresJogador";
import Jogo from "./Jogo";


function App() {
  const {idBolao} = useParams()
  return (
    <Router>
      <div>
        <Link to="/"><button type="button" className="btn btn-primary btn-sm">Classificação</button></Link>  
        <Link to="/jogo"><button type="button" className="btn btn-primary btn-sm">Jogos</button></Link> 
        <Routes>
          <Route path="/:idBolao" element={<Classificacao/>} exact/>
          <Route path="/:idBolao/placaresjogo/:idJogo" element={<PlacaresJogo/>} exact/>                     
          <Route path="/:idBolao/placaresjogador/:idJogador" element={<PlacaresJogador/>} exact/>
          <Route path="/jogo" element={<Jogo/>} exact/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
