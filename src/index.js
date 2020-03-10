import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Sobre from './component/Sobre';
import Autores from './component/Autores';
import Livros from './component/Livros';
import NotFound from './component/NotFound';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/' exact={true} component={App} />
      <Route path='/Sobre' component={Sobre} />
      <Route path='/autores' component={Autores} />
      <Route path='/Livros' component={Livros} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>, document.getElementById('root'));
