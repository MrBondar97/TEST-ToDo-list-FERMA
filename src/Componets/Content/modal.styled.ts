import styled from 'styled-components';

export const ModalContainer = styled.div`
    position: fixed;
    top: 0; 
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.5);
`
export const ModalStyleContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; // Добавлено для центрирования
    position: absolute;
    top:  50%;
    left:  50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding:  40px;
    border-radius:  15px;
`
export const ModalStyleApplication = styled.div`
    display: flex;
    justify-content: center; // Добавлено для центрирования
    align-items: center; // Добавлено для центрирования
`
export const  ButtonStyledModalContainer = styled.button`
     background: #42c3ebc2; // Основной цвет
    color: black; // Белый текст для контраста
    padding:  10px;  
    margin-left:  4px;
    border: none; // Убрано граничное окружение
    cursor: pointer;
    border-radius:  5px;
    width:  50px;
`
export const TitleStyling = styled.h3`
   color: black; // Основной цвет
   text-align: center; // Центрированный текст
`