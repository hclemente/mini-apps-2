import React from 'react';
import styled from 'styled-components';

const ScoreContainer = styled.div`
  height: 28px;
  width: 50px;
  background: white;
  border-bottom: 1px solid black;
  border-left: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
`;

const FrameScore = (props) => {
  return (
    <ScoreContainer>
      X
    </ScoreContainer>
  )
}

export default FrameScore;