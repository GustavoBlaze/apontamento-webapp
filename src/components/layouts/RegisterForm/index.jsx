import React, { useCallback } from 'react';

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
  const handleSubmit = useCallback((event) => {
    event.preventDefault();

    const { target: form } = event;

    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    // eslint-disable-next-line no-console
    console.log({ name, email, password });
  }, []);

  return (
    <Container>
      <Title>Registro</Title>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Nome:</Label>
          <Input type="text" name="name" required autoComplete="on" autoFocus />
        </FormGroup>

        <FormGroup>
          <Label>Email:</Label>
          <Input
            type="email"
            name="email"
            required
            autoComplete="on"
            autoFocus
          />
        </FormGroup>

        <FormGroup>
          <Label>Senha:</Label>
          <Input
            type="password"
            name="password"
            required
            autoComplete="current-password"
            autoFocus
          />
        </FormGroup>

        <Button>Acessar</Button>
      </Form>
      <Observation href="/login">Já possui conta? Faça login!</Observation>
    </Container>
  );
}

export default RegisterForm;
