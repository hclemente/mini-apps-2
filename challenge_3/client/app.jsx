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
  }
  componentDidMount() {

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
        <Keypad/>
        </InputContainer>
      </MainContainer>
    )
  }
}

export default App;



/* background: #33B2FF, */