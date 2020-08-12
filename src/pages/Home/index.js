//Finado arquivo App.js que virou index.js na pasta Home
import React from 'react'; 
import Menu from '../../components/Menu';
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';

function Home() {
  return (
  <div style={{ background: "#141414"}}>
      <Menu />

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"VEJA COMO É FÁCIL!"}
        />

        <Carousel
          //Carrossel da categoria Institucional - TD Educação
          ignoreFirstVideo
          category={dadosIniciais.categorias[0]}
        />

        <Carousel
          //Carrossel da categoria Aulas - Aplicativos no Smartphone
          //ignoreFirstVideo
          category={dadosIniciais.categorias[1]}
        />

        <Carousel
          //Carrossel da categoria Aulas - Ferramentas de Escritório
          //ignoreFirstVideo
          category={dadosIniciais.categorias[2]}
        />
      
        <Carousel
          //Carrossel da categoria Aulas - Design Gráfico, Edição de Vídeos e Games
          //ignoreFirstVideo
          category={dadosIniciais.categorias[3]}
        />

        <Carousel
          //Carrossel da categoria Aulas - Conteúdos extras e curiosidades
          //ignoreFirstVideo
          category={dadosIniciais.categorias[4]}
        />
        <Carousel
          //Carrossel da categoria Participações no MAIS SABER EDUCACIONAL
          //ignoreFirstVideo
          category={dadosIniciais.categorias[5]}
        /> 
        <Footer />
    </div>
  );
}

export default Home;
