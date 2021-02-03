import React from 'react';

import { Container } from './styles';

interface IMessage {
  className: string
}

const Message: React.FC<IMessage> = ({ className, children }) => {
  return (
    <Container className={className}>
      { children }
    </Container>
  );
}

export default Message;