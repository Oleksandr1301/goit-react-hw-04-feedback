import styled from 'styled-components';

export const Feedback = styled.div`
  width: 200px;
  display: flex;
  gap: 20px;
  margin: 0 auto 30px auto;
  text-align: center;
  font-size: 18px;
  margin-bottom: 40px;
`;
export const Buttons = styled.button`
  width: 90px;
  padding: 10px;
  font-size: 14px;
  border-radius: 5px;
  border: 1px solid #000;
  cursor: pointer;
  background-color: #e9f3f5;
  margin: 0 auto;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.35);
  &:hover {
    scale: 1.03;
    background-color: #b5c4c0;
  }
`;
