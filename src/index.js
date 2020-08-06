import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/Home';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';

import{
  BrowserRouter, Switch, Route
} from 'react-router-dom';
import NotFound from './pages/notfound';

//Forma correta de fazer um pequeno teste
// const Pagina404 = () => (<div id="notfound">Página 404</div>);


ReactDOM.render(
  //Depois do import do BrowserRouter, Switch, Route
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact/>
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
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
