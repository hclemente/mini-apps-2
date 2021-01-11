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

let numRows = 10;
let numColumns = 10;

const createSquares = (numRows, numColumns, mineRatio) => {
  let squares = [];
  let index = 0;
  for (let row = 0; row < numRows; row++) {
    for (let column = 0; column < numColumns; column++) {
      squares.push(
          {
            index: index,
            covered: true,
            mine: Math.floor(Math.random() * Math.floor(mineRatio)),
            gridCoordinate: [row,column]
          }
        );
        index++;
    }
  }

  return squares;
}

let squares = createSquares(numRows, numColumns);

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

