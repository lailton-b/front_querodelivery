import React from 'react';
import { RiErrorWarningFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

import selfieIcon from '../../assets/selfie.svg';
import Button from '../../components/Button';
import Header from '../../components/Header';
import Head from '../../components/helper/Head';
import Input from '../../components/Input';
import useForm from '../../hooks/useForm';
import Error from '../../components/helper/Error';
import FormWrapper from '../../components/FormWrapper';

import API_URL from '../../api_url';
import useFetch from '../../hooks/useFetch';

import { Container, FileWrapper, FileLabel } from './styles';
import Message from '../../components/Message';

interface IImg {
  preview: string,
  raw: any
}

const Register: React.FC = () => {
  const name = useForm('name');
  const cpf = useForm('cpf');
  const cnpj = useForm('cnpj');
  const email = useForm('email');
  const telephone = useForm('telephone');
  const endereco = useForm('endereco');

  const [img, setImg] = React.useState<IImg>({} as IImg);
  const [fileError, setFileError] = React.useState('');
  const { request, data, loading, error } = useFetch();
  const { request: requestFaceDetection, loading: loadingFaceDetection } = useFetch();

  /* Image value */
  async function handleImgChange(e: any) {
    if (e.target.files[0]) {
      setImg({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      });

      setFileError('');

      if (e.target.files[0].type !== 'image/jpeg' && e.target.files[0].type !== 'image/pjpeg' && e.target.files[0].type !== 'image/png') {
        setFileError('A imagem deve ser .jpeg, .pjpeg ou .png');
      } else {
        /* Face detection */
        const imageFormData = new FormData();
        imageFormData.append('file', e.target.files[0]);
    
        const { json } = await requestFaceDetection(API_URL + '/selfie', {
          method: 'POST',
          body: imageFormData
        });
    
        if (json && json.message === false) setFileError('Rosto não detectado, por favor aproxime-se mais da câmera.');
      }


    }
  }

  /* Form submit */
  async function handleSubmit(e: any) {
    e.preventDefault();

    if (!img.raw) setFileError('É necessário adicionar uma foto.');

    if (name.validate() && cpf.validate() && cnpj.validate() && email.validate() && telephone.validate() && endereco.validate() && img.raw && fileError === '') {
      const formData = new FormData();
      formData.append('file', img.raw);
      formData.append('name', name.value);
      formData.append('cpf', cpf.value);
      formData.append('cnpj', cnpj.value);
      formData.append('email', email.value);
      formData.append('telephone', telephone.value);
      formData.append('address', endereco.value);

      await request(API_URL + '/register', {
        method: 'POST',
        body: formData
      });
    }
  }

  if (data && data.hasOwnProperty('message')) {
    return (
      <Container className="container">
        <Header />
        <Head title="Cadastro |" content="Gostaria de entregar amor conosco? Preencha o formulário e faça o seu cadastro para se tornar um entregador do roxinho." />

        <Message className="top_animation successful_message">
          <h2>Cadastro realizado com sucesso!</h2>
          <p>
            Enviaremos um e-mail assim que o status do seu cadastro for alterado.
          </p>
          <p>
            Também é possível acompanhar o cadastro <Link to="/consulta">aqui.</Link>
          </p>
        </Message>
      </Container>
    )
  } else return (
    <Container className="container">
      <Header />
      <Head title="Cadastro |" content="Gostaria de entregar amor conosco? Preencha o formulário e faça o seu cadastro para se tornar um entregador do roxinho." />

      <main>
        <Message className="top_animation">
          <h1>Quero entregar amor</h1>
          <p>Preencha as informações e entraremos em contato em até 24 horas!  💜</p>
        </Message>

        <FormWrapper>
          <form onSubmit={handleSubmit}>
            <Input
              type="text"
              id="name"
              label="*Nome e sobrenome" {...name}
              autoComplete="off"
            />
            <Input
              type="text"
              id="cpf"
              label="*CPF" {...cpf}
              autoComplete="off"
              placeholder="000.000.000-00"
              mask={[/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/]}
            />
            <Input
              type="text"
              id="cnpj"
              label="*CNPJ" {...cnpj}
              autoComplete="off"
              placeholder="00.000.000/0000-00"
              mask={[/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/]}
            />
            <Input
              type="text"
              id="email"
              label="*E-mail"
              {...email}
              autoComplete="off" />

            <Input
              type="text"
              id="telephone"
              label="*Telefone"
              {...telephone}
              autoComplete="off"
              placeholder="(00) 90000-0000"
              mask={['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
            />

            <Input
              type="text"
              id="endereco"
              label="*Endereço"
              {...endereco}
              autoComplete="off"
            />

            <FileWrapper>
              <div>
                <FileLabel
                  htmlFor="img"
                  style={{
                    backgroundImage: `url(${img.preview ? img.preview : selfieIcon})`,
                    backgroundSize: `${img.preview ? 'contain' : '30px'}`,
                    backgroundColor: `${img.preview ? '#1a1a1a' : '#FFF'}`
                  }}
                >
                  Enviar Selfie
                </FileLabel>
                <input type="file" id="img" name="img" onChange={handleImgChange} />
              </div>

              <Error>{fileError}</Error>
              <p>
                <RiErrorWarningFill size="25" />
                <span>Por favor, selfie sem óculos ou máscara.</span>
              </p>

            </FileWrapper>

            {error && <Error className="formError">{ error } Gostaria de <Link to="/consulta">consultar</Link> seu cadastro?</Error> }

            { loading && (
              <Button buttonType="secondary" tagName="button" type="submit" loading={ loading }>Enviando...</Button>
            )}

            { !loading && !loadingFaceDetection && (
              <Button buttonType="secondary" tagName="button" type="submit">Quero entregar amor!</Button>
            ) }

            { loadingFaceDetection && (
              <Button buttonType="secondary" tagName="button" type="submit" loading={ loadingFaceDetection }>Analisando selfie...</Button>
            )}
          </form>
        </FormWrapper>
      </main>
    </Container>
  )
}

export default Register;