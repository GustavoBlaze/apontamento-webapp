import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';

import { Container, Action, Hour } from './styles';

const actions = {
  ENTRADA: 'Entrei na empresa',
  SAIDA_ALMOCO: 'Saí para almoçar',
  VOLTA_ALMOCO: 'Voltei do almoço',
  SAIDA: 'Saí da empresa',
};

function Card({ entryPoint }) {
  const action = actions[entryPoint.action];
  const hour = format(new Date(entryPoint.createdAt), 'H:m');

  return (
    <Container>
      <Hour>{hour}</Hour>
      <Action>{action}</Action>
    </Container>
  );
}

Card.propTypes = {
  entryPoint: PropTypes.shape({
    id: PropTypes.number,
    action: PropTypes.string,
    createdAt: PropTypes.string,
  }).isRequired,
};
export default React.memo(Card);
