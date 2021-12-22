import styled from 'styled-components';

export const SearchInput = styled.input`
  width: 100%;
  height: 3rem;
  border-radius: none;
  background: transparent;  
  font-family: 'VT323', sans-serif; 
  font-weight: 400;
  font-size: 2rem;
  padding-left: 1rem;
  border: none;
  border-bottom: 2px solid black;
  outline: none;
  
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 8fr;
  
  overflow-y: auto;
  
  border: 4px solid black;
  border-radius: 1rem;

  ::-webkit-scrollbar {
  width: 20px;
}
  ::-webkit-scrollbar-thumb {
    background: red;
    border-radius: 0.5rem;
  }
  ::-webkit-scrollbar-track{
    border-radius: 0 0.5rem 0.5rem 0;
    background: #E2D4D4;
  }
}

`

export const EmptyContainer = styled.div`
  background-color: red;
  background-repeat: repeat-x;

  display:flex;
  justify-content: right;

  div{ 
    background: #E2D4D4;
    height: 100%;
    width: 20%;
  }
`

export const ContainerList = styled.div`
  background-color: #FFF;
  width: 100%;
  height: 100%;
  
  button{
    display: flex;
    justify-content: left;
    align-items: center;

    padding: 1rem;

    width: 100%;
    height: 3rem;
    background: transparent;
    font-family: 'VT323', sans-serif; 
    font-weight: 400;
    font-size: 2rem;

    cursor: pointer;
    border: none;

    word-break: keep-all;

    transition: filter 0.2s;
    
    &:focus {
      border: 4px solid red;
      border-radius: 0.25rem;
      background-color: #E2D4D4;
    }

    &:hover{
      background-color: #E2D4D4;
    }
  }
`


