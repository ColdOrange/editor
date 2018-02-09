import styled from 'styled-components';

const Button = styled.button`
  background: ${props => (props.primary ? 'palevioletred' : 'white')};
  color: ${props => (props.primary ? 'white' : 'palevioletred')};
  font-size: 12px;
  margin: 0 6px;
  padding: 3px 12px;
  border: 1px solid palevioletred;
  border-radius: 3px;
`;

export default Button;
