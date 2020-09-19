import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Toggle from './pages/Toggle';
import Inicio from './pages/Inicio'; 
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Inicio} /> 
        <Route path="/login" component={Login} />
        <Route path="/toggle" component={Toggle} />
      </Switch>
    </Router>
  );
}
export default App;
