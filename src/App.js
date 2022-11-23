import Classificacao from './Classificacao';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PlacaresJogador from './PlacaresJogador';
import PlacaresJogo from './PlacaresJogo';


function App() {
  return (
    <Router>
    <div className='App'>
      <Link to='/'>Classificacao</Link> | 
      <Link to='/placaresjogador'>Placares Jogador</Link> | 
      <Link to='/placaresjogo'>Placares Jogos</Link>
    </div>
    <Switch>
      <Route exact path='/' component={Classificacao} />
      <Route path='/placaresjogador' component={PlacaresJogador} />
      <Route path='/placaresjogo' component={PlacaresJogo} />
    </Switch>
  </Router>
    
  

  );
}

export default App;
