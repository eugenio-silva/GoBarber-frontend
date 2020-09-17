/* eslint-disable no-console */
/* eslint-disable import/extensions */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback, useRef } from 'react';
import { FiLogIn, FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import logoImg from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Container, Content, Background } from './styles';
import getValidationErrors from '../../utils/getValidationErrors';

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  console.log(formRef);

  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigarório'),
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail válido'),
        password: Yup.string().min(6, 'No mínimo 6 dígitos'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      const errors = getValidationErrors(err);

      formRef.current?.setErrors(errors);
    }
  }, []);

  return (
    <Container>
      <Background />
      <Content>
        <img src={logoImg} alt="GoBarber" />

        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu cadastro</h1>

          <Input name="name" icon={FiUser} placeholder="Nome"></Input>
          <Input name="email" icon={FiMail} placeholder="E-mail"></Input>

          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          ></Input>

          <Button type="submit">Cadastrar</Button>
        </Form>

        <a href="login">
          <FiLogIn />
          Voltar para logon
        </a>
      </Content>
    </Container>
  );
};

export default SignUp;
