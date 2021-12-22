import styled from 'styled-components';

export const PokeName = styled.div`
  width: 100%;
  height: 15%;

  display: flex;
  justify-content: center;
  align-items: center;

  background: #FF0000;
  border: 4px solid black;
  border-radius: 1rem;

  div { 
    background: #E2D4D4;
    width: 80%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    div{
      background: #FFF;

      width: 95%;
      span{
        color: #black;
        font-weight: 600;
        font-size: 2rem;
      } 

    }
  }
`