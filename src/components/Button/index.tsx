import React from 'react';
import { Link } from 'react-router-dom';
import { Container, ButtonElement } from './styles';

interface IButtonProps {
  buttonType: 'primary' | 'secondary',
  tagName: 'a' | 'button', 
  animation?: 'right_animation' | 'left_animation' | 'top_animation' | 'bottom_animation',
  link?: string,
  type?: 'submit',
  loading?: boolean
}

const Button: React.FC<IButtonProps> = ({ children, buttonType, tagName, animation, link, type, loading }) => {
  return (
    <Container>
      { link ? (
        <Link className={`${buttonType} ${animation} button`} to={ link }>
          { children }
        </Link>
      ) : (
        <ButtonElement 
          className={`${buttonType} ${animation} button ${loading ? 'loading' : ''}`} 
          as={ tagName } 
          type={ type ? type : '' }
        >
          { children }
        </ButtonElement>
      )}
    </Container>
  );
}

export default Button;