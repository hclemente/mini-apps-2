import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Square from './Square';

const MainContainer = styled.div`
    position: absolute;
    left: 50%;
    top:  50%;
    transform: translate(-50%, -50%);
    background: grey;
    border: 2px solid black;
    height: 450px;
    width: 450px;
    margin: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    z-index: 0;
`;

let numSquares = 100;

const createSquares = (numSquares) => {
  let squares = [];
  for (let i = 0; i < numSquares; i++) {
    squares.push(
      {
        index: i,
        covered: true,
        mine: Math.floor(Math.random() * Math.floor(9)),
        gridCoordinate: [0,0]
      }
    );
  }
  return squares;
}

let squares = createSquares(numSquares);

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      squares: squares
    }
  }

  render() {

    return (
      <MainContainer>
        {squares.map((square, index) =>
          <Square key={index}/>
        )}
      </MainContainer>
    )
  }
}

export default App;

