import styled from 'styled-components';

export const Controls = styled.div`
  list-style: none;
  display: flex;
`;

export const Btn = styled.button`
  font-size: 20px;
  font-weight: 600;
  margin: 10px;
  border-radius: 10px;
  min-width: 90px;
  cursor: pointer;
  color: white;
  background-color: #dc1d1d;
  &:hover {
    background-color: #fbaf0d;
  }
`;
