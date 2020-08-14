import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/Logo.png';
import './Menu.css';
import Button from '../Button';
import Emoji from '../Emojis/index.js';
//import ButtonLink from './components/ButtonLink';


function Menu(){
    return(
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="TDEducaçãoFlix Logo" title="Sua Netflix de Educação"/>
            </Link>
            
           
           <Button as="a" className="ButtonLink" href="https://www.instagram.com/td_educacao">
                Acesse o Instagram ️<Emoji symbol="❤️" />
            </Button> 
            
            {/* <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Acesse o Instagram ️❤️
            </Button> */}

        </nav>
        );
}

export default Menu; //Permite que seja utilizado em outro locais ou seja, ser importado.