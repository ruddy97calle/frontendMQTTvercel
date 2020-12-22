import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Inicio from './pages/Inicio';
import ControlPanel from './pages/ControlPanel'; 
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Inicio} />
        <Route path="/login" component={Login} />
        <Route path="/control-panel" component={ControlPanel} /> 
      </Switch>
    </Router>
  );
}
export default App;