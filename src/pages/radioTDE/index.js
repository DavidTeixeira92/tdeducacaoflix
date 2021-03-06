import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../src/components/PageDefault/index.js';
import Emoji from '../../components/Emojis/index.js';

function RadioTDE(){
    return(
        <PageDefault>
            <center>

                <h1>Rádio TD Educação - EM MANUTENÇÃO</h1>
                <h2>Marré curioso!! <Emoji symbol="😏" /> </h2>

                <Link to="/">
                    Some daqui, meu!
                </Link>

                <br></br>
         
                  
                      <iframe title="some-daqui" width="200" height="200" 
                      src={`https://www.youtube.com/embed/_N3h7Uzv6aA?autoplay=1&mute=0`} 
                      frameBorder="0" allow="accelerometer;  autoplay;
                      encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen></iframe>
                  

        </center>


        </PageDefault>
    )

}

export default RadioTDE;