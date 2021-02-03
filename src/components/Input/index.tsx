import React from 'react';
import MaskedInput from 'react-text-mask'

import Error from '../helper/Error';
import { Container } from './styles';

interface IInputProps {
  label: string;
  value: string;
  id: string;
  type: string;
  placeholder?: string
  autoComplete: string,
  mask?: (string | RegExp)[],
  error: string | null;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
  onBlur(): void;
}

const Input: React.FC<IInputProps> = ({ 
  label,
  value,
  id,
  type,
  placeholder,
  autoComplete,
  mask,
  error,
  onChange,
  onBlur
}) =>  (
  <Container>
    <label htmlFor={ id }>{ label }</label>
    
    { mask && mask.length ? (
      <MaskedInput
        mask={mask}
        value={ value }
        onChange={ onChange }
        onBlur={ onBlur }
        type={ type }
        id={ id }
        placeholder={ placeholder ? placeholder : '' }
        autoComplete={ autoComplete }
      />
    ) : (
      <input 
        value={ value }
        onChange={ onChange }
        onBlur={ onBlur }
        type={ type }
        id={ id }
        placeholder={ placeholder ? placeholder : '' }
        autoComplete={ autoComplete }
      />
    )}

    { error && <Error>{ error }</Error> }
  </Container>
)

export default Input