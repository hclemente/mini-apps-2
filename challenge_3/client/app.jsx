import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Keypad from './Keypad';
import Scoreboard from './Scoreboard';
import Name from './Name';


const MainContainer = styled.div`
    position: absolute;
    left: 50%;
    top:  50%;
    transform: translate(-50%, -50%);
    background: blue;
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

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {

    }
  }
  componentDidMount() {

  }
  render() {

    return (
      <MainContainer>
        <PlayerContainer>
        <Name/>
        <Scoreboard/>
        </PlayerContainer>
        <Keypad/>
      </MainContainer>
    )
  }
}

export default App;



/* background: #33B2FF, */