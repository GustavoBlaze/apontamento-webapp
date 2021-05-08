import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.6rem;
  border: 1px solid var(--text-color);
  border-radius: 0.4rem;

  &:not(:last-child) {
    margin-bottom: 1.6rem;
  }
`;

export const Hour = styled.p`
  font-size: 1.6rem;
  line-height: 1.6rem;
  color: var(--text-color);
  margin-bottom: 0.8rem;
`;

export const Action = styled.strong`
  font-size: 1.6rem;
  line-height: 1.6rem;
  font-weight: 500;
  color: var(--text-color);
`;
