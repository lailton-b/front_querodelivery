import React from 'react';
import { AiOutlineFileSearch, AiOutlineFileText } from 'react-icons/ai';

import Button from '../../components/Button';
import Header from '../../components/Header';
import Head from '../../components/helper/Head';
import DeliveryBoy from '../../components/DeliveryBoy';

import { Container, ContentWrapper, ButtonsWrapper } from './styles';

const Home: React.FC = () => {
  return (
    <Container className="container">
      <Header />
      <Head title="" content="Gostaria de entregar amor conosco? Faça o seu cadastro para se tornar um entregador do roxinho." />

      <ContentWrapper>
        <h1 className="right_animation">  
          <span>Aproveitando a vida</span> <span className="yellow">entregue conosco!</span>
        </h1>
        <p className="right_animation">Cadastre-se ou consulte o andamento do seu cadastro.</p>

        <ButtonsWrapper>
          <Button buttonType="primary" tagName="a" animation="top_animation" link="cadastro">
            <AiOutlineFileText size={25} />
            <p>
              <span>Faça o seu</span>
              <span>Cadastro</span>
            </p>
          </Button>

          <Button buttonType="primary" tagName="a" animation="bottom_animation" link="consulta">
            <AiOutlineFileSearch size={25} />
            <p>
              <span>Faça a sua</span>
              <span>Consulta</span>
            </p>
          </Button>
        </ButtonsWrapper>
      </ContentWrapper>

      <DeliveryBoy />
    </Container>
  );
}

export default Home;