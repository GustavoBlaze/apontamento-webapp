import React, { useCallback, useState } from 'react';

import api from '@lib/api';

import {
  Container,
  Title,
  Form,
  Label,
  Select,
  FormGroup,
  Button,
  LogoutButton,
  Header,
} from './styles';

const actions = [
  {
    value: 'ENTRADA',
    text: 'Entrei na empresa',
  },
  {
    value: 'SAIDA_ALMOCO',
    text: 'Saí para almoçar',
  },
  {
    value: 'VOLTA_ALMOCO',
    text: 'Voltei do almoço',
  },
  {
    value: 'SAIDA',
    text: 'Saí da empresa',
  },
];

function NewEntryPointForm() {
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = useCallback(async (event) => {
    event.preventDefault();

    if (isSending) return;
    setIsSending(true);

    const { target: form } = event;
    const action = form.action.value;

    try {
      await api.post('entrypoint/create', { action });
      alert('Apontamento criado com sucesso');
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log({ err });
      alert('Não foi possível registrar, tente novamente');
    } finally {
      setIsSending(false);
    }
  }, []);

  return (
    <Container>
      <Header>
        <Title>Novo apontamento</Title>
        <LogoutButton />
      </Header>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Selecione a ação:</Label>
          <Select name="action">
            {actions.map(({ value, text }) => (
              <option key={value} value={value}>
                {text}
              </option>
            ))}
          </Select>
        </FormGroup>
        <Button disabled={isSending}>Registrar</Button>
      </Form>
    </Container>
  );
}

export default React.memo(NewEntryPointForm);
