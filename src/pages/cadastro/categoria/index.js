import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

function CadastroCategoria(){
    return(
      <PageDefault>
        <center>

          <h1>Cadastro de Categoria - EM MANUTENÇÃO</h1>
          <h2>Marré curioso!! 😏 </h2>

          <Link to="/">
          Some daqui, meu!
          </Link>
          <table>
              <tr>
                  <td>
                      <iframe width="200" height="200" 
                      src={`https://www.youtube.com/embed/_N3h7Uzv6aA?autoplay=1&mute=0`} 
                      frameborder="0" allow="accelerometer;  autoplay;
                      encrypted-media; gyroscope; picture-in-picture" 
                      allowfullscreen></iframe>
                  </td>
              </tr>
          </table>

        </center>
        
      </PageDefault>
  
    )
  }

  export default CadastroCategoria;