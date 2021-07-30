import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Game from './pages/Game';

function App(){
  return(
    <Router>
      <div>
        <h2>React Router Game</h2>
        <nav>
          <ul>
            <li><Link to={'/'}> Home </Link></li>
            <li><Link to={'/Game'}> Game </Link></li>
            <li><Link to={'/About'}> About </Link></li>
          </ul>
        </nav>
        <Switch>
            <Route path = '/' exact component = {Home}></Route>
            <Route path = '/Game' exact component = {Game}></Route>
            <Route path = '/About' exact component = {About}></Route>
        </Switch>
      </div>
    </Router>
  )
}
// ========================================

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
  