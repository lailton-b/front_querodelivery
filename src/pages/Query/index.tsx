import React from 'react';

import Button from '../../components/Button';
import Header from '../../components/Header';
import Head from '../../components/helper/Head';
import Input from '../../components/Input';
import Error from '../../components/helper/Error';
import DeliveryBoy from '../../components/DeliveryBoy';
import Message from '../../components/Message';
import FormWrapper from '../../components/FormWrapper';

import useForm from '../../hooks/useForm';
import useFetch from '../../hooks/useFetch';
import API_URL from '../../api_url';

import { Container } from './styles';

interface IData {
  name: string,
  createdAt: string,
  disapproval_time: string,
  email: string,
  img: {
    name: string, 
    url: string,
  },
  redo_test: boolean,
  status: string,
}

const Query: React.FC = () => {
  const { request, error, loading } = useFetch();
  const cpf = useForm('cpf');
  const [ data, setData ] = React.useState<IData>({} as IData);

  const getMinutesLeft = React.useMemo(() => {
    if (data && data.disapproval_time) {
      const actualMinutes = new Date().getMinutes();
      const redoMinutes = new Date(data.disapproval_time).getMinutes() + 10;
      
      return redoMinutes - actualMinutes;
    } else {
      return 0;
    }
  }, [data]);
  
  async function handleSubmit(e: any) {
    e.preventDefault();

    if (cpf.validate()) {
      const { json } = await request(API_URL + `/register/${cpf.value}`, {
        method: 'GET'
      });

      setData(json);
    }
  }

  if (data && data.name) {
    return (
      <Container className="container">
        <Header />
        <Head title="Consulta |" content="Já realizou seu cadastro para fazer parte da equipe? Consulte o andamento do seu cadastro." />

        <Message className="top_animation successful_message">
          { data.status === 'pendente' && (
            <>
              <h1>Olá, { data.name }</h1>
              <div>
                <p className="status_wrapper">O seu status está <span className="status">pendente</span>.</p>
                <p>Enviaremos um e-mail para { data.email } assim que atualizarmos. Obrigado por consultar 💜</p>
              </div>
            </>
          )}

          { data.status === 'aprovado' && (
            <>
              <h1>Obaa!</h1>
              <div>
                <p className="status_wrapper">O seu cadastro foi <span className="status">aprovado</span>, { data.name } 💜</p>
                <p>Estamos extremamente ansiosos para trabalhar contigo. Vamos entregar felicidade!!</p>
              </div>
            </>
          )}

          { data.status === 'reprovado' && data.redo_test && (
            <>
              <h1>Olá, { data.name }</h1>
              <div>
                <p className="status_wrapper">Infelizmente o seu cadastro foi <br/><span className="status">recusado</span> ):</p>
                <p>Por favor, não desanime. Você já pode realizar outro cadastro 💜</p>
              </div>
            </>
          )}

          { data.status === 'reprovado' && !data.redo_test && (
            <>
              <h1>Olá, { data.name }</h1>
              <div>
                <p className="status_wrapper">Infelizmente o seu cadastro foi <br/><span className="status">recusado</span> ):</p>
                <p>
                  Por favor, não desanime. Você poderá se cadastrar novamente em { getMinutesLeft } { getMinutesLeft === 1 ? 'minuto' : 'minutos' } 
                💜</p>
              </div>
            </>
          )}
        </Message>

        <DeliveryBoy />
      </Container>
    )
  } else return (
    <Container className="container">
      <Header />
      <Head title="Consulta |" content="Já realizou seu cadastro para fazer parte da equipe? Consulte o andamento do seu cadastro." />

      <Message className="top_animation">
        <h1>Consulte seu cadastro</h1>
        <p>Costumamos atualizar o status em até 24 horas!  💜</p>
      </Message>

      <FormWrapper>
        <form onSubmit={ handleSubmit }>
          <Input 
            mask={[/\d/, /\d/, /\d/, '.' , /\d/, /\d/, /\d/, '.' , /\d/, /\d/, /\d/, '-' , /\d/, /\d/]}
            type="text" 
            id="cpf" 
            label="*CPF"
            autoComplete="off" 
            placeholder="000.000.000-00" 
            { ...cpf } 
          />

          {error && <Error className="formError">{ error }</Error> }

          { loading ? (
            <Button buttonType="secondary" tagName="button" type="submit" loading={ loading }>Enviando...</Button>
          ) : (
            <Button buttonType="secondary" tagName="button" type="submit">Consultar</Button>
          )}
        </form>
      </FormWrapper>
    </Container>
  );
}

export default Query;
