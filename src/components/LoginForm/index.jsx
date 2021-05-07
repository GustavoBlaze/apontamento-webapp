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

function LoginForm() {
  const handleSubmit = useCallback((event) => {
    event.preventDefault();

    const { target: form } = event;

    const email = form.email.value;
    const password = form.password.value;

    // eslint-disable-next-line no-console
    console.log({ email, password });
  }, []);

  return (
    <Container>
      <Title>Login</Title>
      <Form onSubmit={handleSubmit}>
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
      <Observation href="/register">
        Não possui conta? Crie uma agora!
      </Observation>
    </Container>
  );
}

export default LoginForm;
