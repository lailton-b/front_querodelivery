import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/querodelivery.svg';
import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <Container className="container appearing_animation">
      <Link to="/">
        <img src={logo} alt="Quero Delivery" />
      </Link>
    </Container>
  );
}

export default Header;