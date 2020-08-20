import React from 'react';
import { FooterBase } from './styles';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <FooterBase>
      <Link to="/cadastro/video">
        <img src="https://fontmeme.com/permalink/200810/384a7e785407d51c8bf9753f8fa6fd0a.png" alt="Logo Alura" />
      </Link>
      <p>Acesse a <a href="https://radiotdeducacao.vercel.app/" target="blank">Rádio TD Educação</a></p>
      <p>Participe do nosso <a href="https://chat.whatsapp.com/Lm84PL1toXG73lGKVRtVOr" target="blank">GRUPO DO WHATSAPP</a></p>
      <p>
        Orgulhosamente criado por David Teixeira durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura 
        </a>{'.'}
      </p>
    </FooterBase>
  );
}

export default Footer;
