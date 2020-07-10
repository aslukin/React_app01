import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { Home } from './Pages/Home';
import { About } from './Pages/About';
import { Navbar } from './Components/Navbar';
import { AlertState } from './Context/Alert/AlertState';

function App() {
  return (
    <AlertState>
      <BrowserRouter>
        <Navbar />
        <div className="container pt-4">

          <Switch>
            <Route path={"/"} exact component={Home} />
            <Route path={"/about"} component={About} />
          </Switch>
        </div>
      </BrowserRouter>
    </AlertState>
  );
}

export default App;
