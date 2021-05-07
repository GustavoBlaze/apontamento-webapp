import React, { useCallback, useEffect, useRef } from 'react';

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
  const firstInputRef = useRef(null);

  const handleSubmit = useCallback((event) => {
    event.preventDefault();

    const { target: form } = event;

    const email = form.email.value;
    const password = form.password.value;

    // eslint-disable-next-line no-console
    console.log({ email, password });
  }, []);

  useEffect(() => {
    firstInputRef?.current?.focus();
  }, [firstInputRef]);

  return (
    <Container>
      <Title>Login</Title>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Email:</Label>
          <Input
            ref={firstInputRef}
            type="email"
            name="email"
            required
            autoComplete="on"
          />
        </FormGroup>

        <FormGroup>
          <Label>Senha:</Label>
          <Input
            type="password"
            name="password"
            required
            autoComplete="current-password"
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
