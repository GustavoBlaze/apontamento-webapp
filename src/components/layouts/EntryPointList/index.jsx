import React from 'react';
import PropTypes from 'prop-types';

import { Container, Title } from './styles';

import DayAggregate from './DayAggregate';

function EntryPointList({ entryPoints }) {
  return (
    <Container>
      <Title>Últimos apontamentos</Title>
      {entryPoints.map(({ date, entries }) => (
        <DayAggregate key={date} date={date} entries={entries} />
      ))}
    </Container>
  );
}

EntryPointList.defaultProps = {
  entryPoints: [],
};

EntryPointList.propTypes = {
  entryPoints: PropTypes.arrayOf(PropTypes.object),
};

export default React.memo(EntryPointList);
