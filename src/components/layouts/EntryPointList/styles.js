import styled from 'styled-components';
import Heading from '@components/core/Heading';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
`;

export const Title = styled(Heading)`
  margin-bottom: 1.6rem;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
`;
