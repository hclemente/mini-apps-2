import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 56px;
  width: 116px;
  background: green;
  border: 2px solid black;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Scoreboard = (props) => (
  <Container>
    {props.totalScore}
  </Container>

)

export default Scoreboard;