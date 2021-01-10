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
  }

  inputPins (pins) {
    let newState = Object.assign({}, this.state);
    if (newState.currentFrameIndex === 0 && newState.currentSubFrameIndex === 0 && newState.totalScore !== 0) {
      newState.frames = [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0, 0]];
      newState.totalScore = 0;
    }
    if (newState.currentFrameIndex < 9) {
      newState.frames[newState.currentFrameIndex][newState.currentSubFrameIndex] = pins;
      newState.totalScore = pins;
      if (newState.currentSubFrameIndex === 0 && pins < 10) {
        newState.currentSubFrameIndex++;
      } else {
        newState.currentSubFrameIndex = 0;
        newState.currentFrameIndex++;
      }
    } else {
      newState.frames[newState.currentFrameIndex][newState.currentSubFrameIndex] = pins;
      if (newState.currentSubFrameIndex < 2 && pins < 10) {
        newState.currentSubFrameIndex += 2;
      } else if (newState.currentSubFrameIndex < 2 && pins === 10) {
        newState.currentSubFrameIndex++;
      } else {
        newState.currentSubFrameIndex = 0;
        newState.currentFrameIndex = 0;
      }
    }
    this.setState(newState);
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