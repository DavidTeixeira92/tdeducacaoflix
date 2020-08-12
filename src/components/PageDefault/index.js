import React from 'react';
import Menu from '../Menu';
import Footer from '../Footer';
import styled from 'styled-components';

const Main = styled.main`

    background-color: var(--black);
    color: var(--white);
    flex: 1;
    padding-top: 50px;
    padding-left: 5%;
    padding-right: 5%;

`;

// function PageDefault(props){
    //ou
function PageDefault({children}){
    // props é utilizado para pegar o conteúdo interno e jogar em algum local
   // {children} => destruction, abriu o objeto props e pegou o seu conteúdo
    return(
        <> 
        {/* Todo componente tem uma estrutura em volta. */}
            <Menu />
            <Main>
                {children}
            </Main>
            <Footer />

        </>

    );
}

export default PageDefault;