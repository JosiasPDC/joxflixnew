import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import{
  BrowserRouter, Switch, Route, Redirect
} from 'react-router-dom';

import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';
import Login from './pages/Login';
import NotFound from './pages/notfound';
import AcessoNegado from './pages/AcessoNegado';

import { isAuthenticated } from "./services/auth";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

ReactDOM.render(
  //Depois do import do BrowserRouter, Switch, Route
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/AcessoNegado" component={AcessoNegado} exact/>
      <Route path="/Login" component={Login} />
      <PrivateRoute Route path="/cadastro/video" component={CadastroVideo} />
      <PrivateRoute Route path="/cadastro/categoria" component={CadastroCategoria} />
      <PrivateRoute Route path="/cadastro/categoria/:id" component={CadastroCategoria} />

      <Route component={NotFound} /> 
      {/* Em é possível utilizar o código abaixo */}
      {/* <Route component={() => (<div>Página 404</div>)} /> */}
      {/* Mas a melhor forma deve ser criando uma const */}
      {/* <Route component={Pagina404} /> */}
    </Switch>
  </BrowserRouter>,

  //Antes do import do BrowserRouter, Switch, Route
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  document.getElementById('root')
);
