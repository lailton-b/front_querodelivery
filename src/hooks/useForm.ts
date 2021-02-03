import React from 'react';

interface ITypes {
  // The index parameter allow us to set the object without giving to it a proper name
  [ index: string ]: {
    message: string,
    regex: RegExp,
  }
}

const types: ITypes = {
  email: {
    message: 'E-mail inválido',
    regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  },
  cpf: {
    message: 'CPF inválido',
    regex: /(?:\d{3}[-.\s]?){3}\d{2}/, 
  },
  telephone: {
    message: 'Número de telefone inválido',
    regex: /^(?:\()[0-9]{2}(?:\))\s?[0-9]{4,5}(?:-)[0-9]{4}$/
  },
  cnpj: {
    message: 'CNPJ inválido',
    regex: /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/
  }
}

const useForm = (type : string) => {
  const [ value, setValue ] = React.useState<string>('');
  const [ error, setError ] = React.useState<string | null>(null);

  function validate() {
    if (!types[type] && value.length) {
      setError(null);
      return true;
    } else if (!value.length) {
      setError('O campo não pode estar vazio.')
      return false;
    } else if (types[type] && types[type].regex.test(value)) {
      setError(null);
      return true;
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message);
      return false;
    }
  }

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
    if (error) validate();
  }

  function onBlur() {
    validate();
  }

  return { error, value, setValue, validate, onBlur, onChange, }
}

export default useForm;