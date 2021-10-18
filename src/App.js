
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import Home from './components/Home/Home';
import Services from './components/Services/Services';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="/services/:id">
            <Services></Services>
          </Route>

        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
