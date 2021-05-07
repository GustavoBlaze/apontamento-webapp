import styled from 'styled-components';

const Button = styled.button`
  font-size: 1.8rem;
  line-height: 2.4rem;
  padding: 1.2rem;
  cursor: pointer;
  align-self: stretch;
  color: var(--text-color);
  border-radius: 0.4rem;
  border: 1px solid var(--text-color);
  text-transform: uppercase;
  font-weight: bold;
  background: transparent;
  transition: all 0.35s ease;

  &:hover {
    opacity: 0.8;
    transform: translateY(-0.2rem);
  }
`;

export default Button;
