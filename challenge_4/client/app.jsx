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
let mineRatio = 7;

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
            gridCoordinate: [row,column],
            minesAround: 0,
          }
        );
        index++;
    }
  }

  return squares;
}

let squares = createSquares(numRows, numColumns, mineRatio);

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      squares: squares
    }
    this.uncoverSquare = this.uncoverSquare.bind(this);
    this.countMines = this.countMines.bind(this);
  }

  uncoverSquare (index) {
    let newState = Object.assign({}, this.state);
    newState.squares[index].covered = false;
    newState.squares[index].minesAround = this.countMines(index);
    this.setState(newState);
    // console.log(this.state.squares[index]);
  }

  countMines (index) {
    let count = 0;
    let newState = Object.assign({}, this.state);
    // console.log(newState.squares);
    for (let i = 9; i < 12; i++) {
      let above = index - i;
      let below = index + i;
      if (above >= 0) {
        if ((index !== 0 && index % 10 !== 0) && (index !== 9 && index % 10 !== 9)) {
          if (newState.squares[above].mine === 0) {
            count++;
          }
        } else if(index === 0 || index % 10 === 0) {
          if (i !== 11) {
            if (newState.squares[above].mine === 0) {
              count++;
            }
          }
        } else {
          if (i !== 9) {
            if (newState.squares[above].mine === 0) {
              count++;
            }
          }
        }
      }
      if (below < squares.length) {
        if ((index !== 0 && index % 10 !== 0) && (index !== 9 && index % 10 !== 9)) {
          if (newState.squares[below].mine === 0) {
            count++;
          }
        } else if(index === 0 || index % 10 === 0) {
          if (i !== 9) {
            if (newState.squares[below].mine === 0) {
              count++;
            }
          }
        } else {
          if (i !== 11) {
            if (newState.squares[below].mine === 0) {
              count++;
            }
          }
        }
      }
    }
    if (index !== 0 && index % 10 !== 0) {
      if (newState.squares[index - 1].mine === 0) {
        count++;
      }
    }
    if (index !== 9 && index % 10 !== 9) {
      if (newState.squares[index + 1].mine === 0) {
        count++;
      }
    }
    return count;
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

