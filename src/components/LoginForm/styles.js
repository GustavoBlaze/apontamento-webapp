import styled from 'styled-components';

import Heading from '@components/Heading';

export { default as Label } from '@components/Label';
export { default as Form } from '@components/Form';
export { default as Input } from '@components/Input';
export { default as FormGroup } from '@components/FormGroup';
export { default as Button } from '@components/Button';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 1.6rem;
`;

export const Title = styled(Heading)`
  margin-bottom: 2.4rem;
`;

export const Observation = styled.a`
  font-size: 1.6rem;
  text-decoration: underline;
  margin-top: 2.4rem;
  cursor: pointer;
`;
