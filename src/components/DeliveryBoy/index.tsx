import React from 'react';
import { ReactComponent as DeliveryBoyImage } from '../../assets/entregador_querodelivery.svg';
import { Container } from './styles';

const DeliveryBoy: React.FC = () => {
  return (
    <Container>
      <DeliveryBoyImage />
    </Container>
  )
}

export default DeliveryBoy;