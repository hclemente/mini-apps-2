import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const MainContainer = styled.div`
    position: absolute;
    left: 50%;
    top:  50%;
    transform: translate(-50%, -50%);
    background: grey;
    border: 2px solid black;
    height: 900px;
    width: 900px;
    margin: auto;
    display: flex;
    flex-direction: column;
    z-index: 0;
`;

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {

    }
  }

  render() {

    return (
      <MainContainer>
        Test Content
      </MainContainer>
    )
  }
}

export default App;

