import React from 'react';

import { Container } from './styles';

const FormWrapper: React.FC = ({ children }) => {
  return (
    <Container className="right_animation">{ children }</Container>
  );
}

export default FormWrapper;