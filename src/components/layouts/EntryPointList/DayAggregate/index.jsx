import React from 'react';
import PropTypes from 'prop-types';
import { differenceInDays } from 'date-fns';
import { Container, DateFormatted, List } from './styles';
import Card from '../Card';

function DayAggregate({ date, entries }) {
  const [firstEntry] = entries;

  const daysDifference = differenceInDays(
    new Date(),
    new Date(firstEntry?.createdAt),
  );

  const dateString = ['Hoje', 'Ontem', 'Anteontem'][daysDifference] || date;

  return (
    <Container>
      <DateFormatted>{dateString}</DateFormatted>
      <List>
        {entries.reverse().map((entry) => (
          <Card key={String(entry.id)} entryPoint={entry} />
        ))}
      </List>
    </Container>
  );
}

DayAggregate.propTypes = {
  date: PropTypes.string.isRequired,
  entries: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default React.memo(DayAggregate);
