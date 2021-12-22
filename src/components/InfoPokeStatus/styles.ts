import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 30%;

  display: flex;
  justify-content: center;
  align-items: center;

  background: #FF0000;
  border: 4px solid black;
  border-radius: 1rem;

  font-size: 1.5rem;
  
  div { 
    background: #E2D4D4;
    width: 80%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    div{
      background: #FFF;

      display: flex;
      justify-content: center;
      align-items: center;

      width: 95%;
      
      section {
        display: flex;
      }

      section:not(:first-child) {
        margin-top: 1rem;
      }

      li {
        list-style-type: none;
        margin-left: 0.5rem;
        border-radius: 0.25rem;
      }

      span{
        padding: 0 0.5rem;
      }
    }
  } 
`

const colors = {
  grass: "green"
}

export const TypeList = styled.li`
    list-style-type: none;
    margin-left: 0.5rem;
    border-radius: 0.25rem;

    background: ${(props) => 
    props.id === "normal" ? '#A8A77A' :
    props.id === "grass" ? '#7AC74C' :
    props.id === "poison" ? '#A33EA1':
    props.id === "fire" ? '#EE8130' :
    props.id === "water" ? '#6390F0' :
    props.id === "electric" ? '#F7D02C' :
    props.id === "ice" ? '#96D9D6' :
    props.id === "fighting" ? '#C22E28' :
    props.id === "ground" ? '#E2BF65' :
    props.id === "flying" ? '#A98FF3':
    props.id === "psychic" ? '#F95587' :
    props.id === "bug" ? '#A6B91A' :
    props.id === "rock" ? '#B6A136' :
    props.id === "ghost" ? '#735797' :
    props.id === "dragon" ? '#6F35FC' :
    props.id === "dark" ? '#705746' :
    props.id === "steel" ? '#B7B7CE' :
    props.id === "fairy" && '#D685AD' };

    span{
        padding: 0 0.5rem;
      }
`