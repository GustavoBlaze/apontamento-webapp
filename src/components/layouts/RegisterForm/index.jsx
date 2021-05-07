/* eslint-disable no-alert */
/* eslint-disable no-console */
import React, { useCallback, useRef, useEffect } from 'react';

import api from '@lib/api';
import {
  Container,
  Title,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Observation,
} from './styles';

function RegisterForm() {
  const firstInputRef = useRef(null);

  const handleSubmit = useCallback(async (event) => {
    event.preventDefault();

    const { target: form } = event;

    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    if (password !== confirmPassword) {
      alert('As senhas não são iguais');
    }

    try {
      await api.post('users/create', {
        name,
        email,
        password,
      });

      alert('Conta criada com sucesso!');

      window.location.href = '/login';
    } catch (err) {
      console.log({ err });
      alert(err?.response?.data || 'Não foi possível criar a conta');
    }
  }, []);

  useEffect(() => {
    firstInputRef?.current?.focus();
  }, [firstInputRef]);

  return (
    <Container>
      <Title>Registro</Title>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Nome:</Label>
          <Input
            ref={firstInputRef}
            tabIndex={0}
            type="text"
            name="name"
            required
            autoComplete="on"
          />
        </FormGroup>

        <FormGroup>
          <Label>Email:</Label>
          <Input type="email" name="email" required autoComplete="on" />
        </FormGroup>

        <FormGroup>
          <Label>Senha:</Label>
          <Input
            type="password"
            name="password"
            required
            autoComplete="new-password"
          />
        </FormGroup>

        <FormGroup>
          <Label>Confirmar senha:</Label>
          <Input
            type="password"
            name="confirmPassword"
            required
            autoComplete="new-password"
          />
        </FormGroup>

        <Button>Criar conta</Button>
      </Form>
      <Observation href="/login">Já possui conta? Faça login!</Observation>
    </Container>
  );
}

export default RegisterForm;
