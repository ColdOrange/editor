import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  color: #555;
  background: rgba(0, 0, 0, 0);
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 32px;
  height: 28px;
  box-sizing: border-box;
  &:hover {
    border: 1px solid #ccc;
  }
`;

export const Divider = styled.div`
  height: 20px;
  border-left: 0.8px solid #ddd;
  margin-left: 4px;
  padding-left: 4px;
`;
