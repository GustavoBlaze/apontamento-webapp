/* eslint-disable react/prop-types */
import styled from 'styled-components';

import Heading from '@components/core/Heading';
import CoreForm from '@components/core/Form';
import Input from '@components/core/Input';

import CoreFormGroup from '@components/core/FormGroup';
import CoreButton from '@components/core/Button';

export { default as Label } from '@components/core/Label';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled(Heading)`
  margin-bottom: 2.4rem;
`;

export const Form = styled(CoreForm)`
  margin-bottom: 1.6rem;
  align-self: stretch;
  max-width: unset !important;
  width: 100%;

  @media (min-width: 576px) {
    flex-direction: row;
  }
`;

export const FormGroup = styled(CoreFormGroup)`
  @media (min-width: 576px) {
    flex: 1;
    margin-bottom: 0;
  }
`;

export const Button = styled(CoreButton)`
  @media (min-width: 576px) {
    align-self: flex-end;
    margin-left: 1.6rem;
    padding: 1.2rem 1.6rem;
    font-size: 1.6rem;
    line-height: 1.6rem;
    height: 4.5rem;
  }
`;

export const Select = ({ children, ...props }) => (
  <Input as="select" {...props}>
    {children}
  </Input>
);
