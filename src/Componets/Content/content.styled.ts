import styled, { keyframes } from 'styled-components';

const inputTextUp = keyframes`
   0% {
    transform: translateY(0);
  }
   100% {
    transform: translateY(0px);
  }
`;
export const CContent = styled.div`
 display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: Arial, sans-serif;
  padding:  5px;
  box-sizing: border-box;
`
export const Striked = styled.span`
  text-decoration: line-through;
`;
export const SAddTask = styled.div`
 display: flex;
  gap:  10px;
  margin-bottom:  20px;
  align-items: center;
  justify-content: center;
`
export const SInput = styled.input`
padding:  10px;
  border-radius:  10px;
  border:  2px solid #ccc;
  outline: none;
  font-size:  15px;
  &:focus {
    border-color: #42c3ebc2;
    animation: ${inputTextUp}  0.3s linear;
  }
`


export const ButtonDivClass = styled.div`

`
export const STasks = styled.div`
align-items: center;
 list-style: none;
  padding:  0;
  width:  600px;
`
export const STask = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
border-bottom:  1px solid #ddd;
padding:  10px  0;
`;

export const TaskInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow:  1;

 
`;

export const TaskActions = styled.div`
   display: flex;
  justify-content: center;
  align-items: center;
    cursor: pointer;

    > *:not(:last-child) {
    margin-right:  20px;
  }
`

export const SButton = styled.button`
  padding:  15px  50px;
  border: none;
  border-radius:  15px;
  background-color: #42c3ebc2;
  color: white;
  cursor: pointer; // Добавлено свойство cursor
  transition: background-color  0.3s ease;
  &:hover {
    background-color: #007bff;
  }
  &:disabled {
    opacity:  0.5;
    cursor: not-allowed;
  }
`;

export const  RemainingTasks = styled.div`
font-size:  16px;
  text-align: center;
  color: #333;
  font-weight: bold;
  margin-top:  20px;
`