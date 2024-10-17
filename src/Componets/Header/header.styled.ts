import styled from 'styled-components';

export const SHeader = styled.header`
    width:  100%;
    padding:  0px;
    height:  226px;
    display: flex;
    justify-content: center;
    align-items: center;
    caret-color: transparent;

    @media (max-width: 375px) {
      padding: 5px;
      height: 24px;
  }
`

export const ProjectHeader = styled.div`
    width: 525px;
    height: 96px;
    text-align: center;
    color: #30324B;
    font-size: 96px;
    line-height: 96px;
    font-family: 'Muller', sans-serif;

    @media (max-width: 375px) {
      font-size: 24px;
      text-align: center;
      justify-content: center;
      caret-color: transparent;
      color: #30324B;
      font-family: 'Muller', sans-serif; 
  }
`
