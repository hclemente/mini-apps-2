import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Keypad from './Keypad';
import Scoreboard from './Scoreboard';
import Name from './Name';
import Frame from './Frame';


const MainContainer = styled.div`
    position: absolute;
    left: 50%;
    top:  50%;
    transform: translate(-50%, -50%);
    background: grey;
    border: 2px solid black;
    height: 120px;
    width: 900px;
    margin: auto;
    display: flex;
    flex-direction: column;
    z-index: 0;
`;

const PlayerContainer = styled.div`
  height: 60px;
  width: 900px;
  background: yellow;
  display: flex;
  flex-direction: row;
  z-index: 1;
`;

const InputContainer = styled.div`
  height: 60px;
  width: 900px;
  background: black;
  display: flex;
  flex-direction: row;
  z-index: 1;
`;

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      name: 'Harry',
      totalScore: 0,
      frames:
        [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0, 0]],
      currentFrameIndex: 0,
      currentSubFrameIndex: 0,
    }
    this.inputPins = this.inputPins.bind(this);
    this.calculateScore = this.calculateScore.bind(this);
  }

  inputPins (pins) {
    let newState = Object.assign({}, this.state);
    if (pins !== 'R') {
      if (newState.currentFrameIndex === 0 && newState.currentSubFrameIndex === 0 && newState.totalScore !== 0) {
        newState.frames = [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0, 0]];
        newState.totalScore = 0;
      }
      if (newState.currentFrameIndex < 9) {
        newState.frames[newState.currentFrameIndex][newState.currentSubFrameIndex] = pins;
        if (newState.currentSubFrameIndex === 0 && pins < 10) {
          newState.currentSubFrameIndex++;
        } else {
          newState.currentSubFrameIndex = 0;
          newState.currentFrameIndex++;
        }
      } else {
        newState.frames[newState.currentFrameIndex][newState.currentSubFrameIndex] = pins;
        if (newState.currentSubFrameIndex < 2 && pins < 10) {
          newState.currentSubFrameIndex++;
        } else if (newState.currentSubFrameIndex < 2 && pins === 10) {
          newState.currentSubFrameIndex++;
        } else {
          newState.currentSubFrameIndex = 0;
          newState.currentFrameIndex = 0;
        }
      }
      newState.totalScore = this.calculateScore(newState);
    } else {
      newState.currentSubFrameIndex = 0;
      newState.currentFrameIndex = 0;
      newState.totalScore = 0;
      newState.frames = [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0, 0]];
    }
    this.setState(newState);
  }

  calculateScore (state) {
    let frames = state.frames;
    let result = 0;
    for (let i = 0; i < state.frames.length - 1; i++) {
      for (let j = 0; j < 2; j++) {
        result += frames[i][j];
        if (i > 0) {
          if(frames[i - 1][0] === 10) {
            result += frames[i][j];
          } else if ((frames[i - 1][0] + frames[i - 1][1]) === 10 && j === 0) {
            result += frames[i][0];
          }
          if (i > 1) {
            if (frames[i - 2][0] === 10 && frames[i - 1][0] === 10) {
              result += frames[i][j];
            }
          }
        }

      }
    }
    if (frames[8][0] === 10) {
      result += frames[9][0];
    } else if (frames[8][0] + frames[8][1] === 10) {
      result += frames[9][0];
    }
    if (frames[7][0] === 10 && frames[8][0] === 10) {
      result += frames[9][0];
      result += frames[9][1];
    }
    result += frames[9][0] + frames[9][1] + frames[9][2];
    return result;
  }


  render() {

    return (
      <MainContainer>
        <PlayerContainer>
        <Name name={this.state.name}/>
        {this.state.frames.map((pins, index) =>
          <Frame key={index} pins={pins} totalScore={this.state.totalScore}/>
        )}
        <Scoreboard totalScore={this.state.totalScore}/>
        </PlayerContainer>
        <InputContainer>
        <Keypad inputPins={this.inputPins}/>
        </InputContainer>
      </MainContainer>
    )
  }
}

export default App;



/* background: #33B2FF, */