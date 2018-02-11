import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 50px;
  color: rgb(0, 0, 0);
  background: rgb(255, 255, 255);
  box-shadow: 0 2px 3px 0 hsla(0, 0%, 39%, 0.15);
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
  margin: 0 10px;
  height: 100%;
`;

export const Input = styled.input`
  margin: 0 10px;
  width: ${props => (props.width ? props.width : 'auto')};
  min-width: 44px;
  font-weight: 700;
  font-size: 14px;
  border: 2px solid rgba(0, 0, 0, 0);
  outline: none;
  &:hover,
  &:focus {
    border-bottom: 2px solid #ccc;
  }
`;

export const Status = styled.div`
  border: 2px solid rgba(0, 0, 0, 0);
  font-size: 12px;
  color: #999;
`;
