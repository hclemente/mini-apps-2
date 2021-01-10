import React from 'react';
import styled from 'styled-components';
import FrameScore from './FrameScore';

const FrameContainer = styled.div`
  height: 56px;
  width: 56px;
  background: purple;
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  z-index: 2;
`;

const TotalContainer = styled.div`
  height: 28px;
  width: 56px;
  color: yellow;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
`;

const Frame = (props) => (
  <FrameContainer>
    <FrameScore/>
    <TotalContainer>
      Total
    </TotalContainer>
  </FrameContainer>
)

export default Frame;