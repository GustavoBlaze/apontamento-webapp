import React, { useCallback, useRef, useEffect } from 'react';

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

  const handleSubmit = useCallback((event) => {
    event.preventDefault();

    const { target: form } = event;

    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    if (password !== confirmPassword) {
      alert('As senhas não são iguais');
    }

    // eslint-disable-next-line no-console
    console.log({ name, email, password, confirmPassword });
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
