import styled, { keyframes } from 'styled-components';

export const moveText = keyframes`
  0% {
    transform: translateX(-100%);
  }
   100% {
    transform: translateX(calc(100% +  100vw)); // Изменение здесь
  }
`;
export const SFooter = styled.footer`
position: fixed;
bottom: 0;
left: 0;
right: 0;
display: flex;
justify-content: left;
align-items: center;
opacity: 80%;
width: 100%;
height: 60px; /* Высота подвала */
background-color: #42c3ebc2;
`;

export const FooterContainer = styled.div`
 
`;

export const FooterText = styled.p`
  display: inline-block;
  white-space: nowrap;
  animation: ${moveText}  15s linear infinite;
`;