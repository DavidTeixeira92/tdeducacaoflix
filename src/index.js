import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';

import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/video';
import CadastroCategoria from './pages/cadastro/categoria';

//import * as serviceWorker from './serviceWorker'; não será usado pois, foi apagado o serviceWorker
///AQUI É A RAÍZ DA APLICAÇÃO
//Aqui temos a inicialização do REACT

const Pagina404 = () => (<div>Página 404</div>)

ReactDOM.render(
  // Envolta da nossa aplicação existe um sistema de roteamento, o BrowserRouter.
  <BrowserRouter>
    {/* Dentro do BrowserRouter ficam as páginas */}
    
    {/* O Switch verifica qual é a rota */}
    <Switch> 
      {/* O Route declara cada página que temos */}
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root') //Manipulando a DOM
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister(); não será usado pois, foi apagado o serviceWorker
