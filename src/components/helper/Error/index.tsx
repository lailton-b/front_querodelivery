import React from 'react';
import { Container } from './styles';

const Error: React.FC<{ className?: string }> = ({ children, className }) => {
  return (
    <Container className={ className ? className : '' }>{ children }</Container>
  )
}

export default Error