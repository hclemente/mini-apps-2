import React from 'react';
import styled from 'styled-components';

const KeyContainer = styled.button`
  height: 28px;
  width: 28px;
  background: #FF7D33;
  justify-content: center;
  align-self: center;
`;

const Key = (props) => (

  <KeyContainer onClick={()=>props.inputPins(props.number)}>
    {props.number}
  </KeyContainer>

)

export default Key;