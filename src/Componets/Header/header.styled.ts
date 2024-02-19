import styled, {keyframes} from 'styled-components';

export const SHeader = styled.header`
    width:  100%;
    padding:  0; // Убираем отступы слева и справа
    height:  100px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Arial, sans-serif;
    background-color: #42c3ebc2;
`;
export const ProjectHeader = styled.div`
  display: inline-block;
    text-align: center; // Добавляем центрирование текста
    & span {
        color: red;
        margin-right:  5px;
        font-size:  70px; // Устанавливаем размер шрифта
    }
    & span:nth-child(2) {
        color: blue;
        margin-right:  5px;
        font-size:  70px; // Устанавливаем размер шрифта
    }
    & span:nth-child(3) {
        color: yellow;
        font-size:  50px; // Устанавливаем размер шрифта
    }
`;
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const TodoListIcon = styled.div`
  position: absolute;
  right:  20px;
  top:  10%;
  transform: translateY(-50%);
  animation: ${rotate}  2s linear infinite;
  color: black;
`;

export const SaveButton = styled.button`
  background-color: green;
  color: white;
  border: none;
  padding:  10px  20px;
  margin:  10px;
  cursor: pointer;
  &:disabled {
    background-color: grey;
  }
`;