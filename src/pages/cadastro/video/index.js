import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import Emoji from '../../../components/Emojis/index.js';
function CadastroVideo(){
    return(
      <PageDefault>
        <center>
          <h1>Cadastro de Vídeo - EM MANUTENÇÃO</h1>
       

          <Link to="/cadastro/categoria" title="Por que você está clicando aqui?">
            Cadastrar Categoria
          </Link>
        
          <h2>OPA!! Não era para você está aqui.</h2>
          
          <h1><Emoji symbol="😁" /></h1>

          <Link to="/">
            Volte para a página inicial, seu curioso!
          </Link>

        </center>
      </PageDefault>
  
    )
  }

  export default CadastroVideo;