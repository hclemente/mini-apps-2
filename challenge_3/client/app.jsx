import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';


const MainContainer = styled.div`
    background: blue;
    height: 100vh;
    width: 900px;
    margin: auto;
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
        Hello
      </MainContainer>
    )
  }
}

export default App;



/* background: #33B2FF, */