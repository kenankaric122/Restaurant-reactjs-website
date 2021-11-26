import logo from './logo.svg';
import './App.css';
import prvi from './prvi';
import App2 from './App2';
import {
  BrowserRouter,
  Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import React from 'react';
import Navbar from './Navbar';


class App extends React.Component {
  render() {
    return (
      <div className="App">
                <BrowserRouter>
                    <Switch>
                      <Route exact path="/" component={prvi} key={1} />;   
                        <Route exact={true} path="/App" component={prvi}  />
                        <Route path="/App2" component={App2}  />
                    </Switch>
                </BrowserRouter>
      </div>
    );
  }
}

export default App;


