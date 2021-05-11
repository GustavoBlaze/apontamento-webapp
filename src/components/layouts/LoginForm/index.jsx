import React, { useCallback, useEffect, useRef, useContext } from 'react';
import Link from 'next/link';
import { AuthContext } from '@contexts/AuthContext';

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

  const { signIn } = useContext(AuthContext);

  const handleSubmit = useCallback((event) => {
    event.preventDefault();

    const { target: form } = event;

    const email = form.email.value;
    const password = form.password.value;

    signIn({ email, password });
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
      <Link href="/register" passHref>
        <Observation href="/register">
          Não possui conta? Crie uma agora!
        </Observation>
      </Link>
    </Container>
  );
}

export default LoginForm;
