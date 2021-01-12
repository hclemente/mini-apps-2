import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Square from './Square';

/*
Challenge 4
- Setup Webpack, Babal, Express
- Setup Jest
- Setup Redux
- Build UI
  - render blank when covered
  - or render a number, mine, or blank when uncovered
- Implement uncoverSquare function
  - create helper function to recursively uncover and check surrounding
    squares based on grid coordinates for mines and return number of mines
    surrounding uncovered squares
**/

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
    this.uncoverSquare = this.uncoverSquare.bind(this);
  }

  uncoverSquare (index) {
    let newState = Object.assign({}, this.state);
    newState.squares[index].covered = false;
    this.setState(newState);
    console.log(this.state.squares[index]);
  }

  render() {

    return (
      <MainContainer>
        {squares.map((square, index) =>
          <Square key={index} square={square} uncoverSquare={this.uncoverSquare}/>
        )}
      </MainContainer>
    )
  }
}

export default App;

