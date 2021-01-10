import React from 'react';
import styled from 'styled-components';

const KeyContainer = styled.button`
  height: 28px;
  width: 28px;
  background: red;
  justify-content: center;
  align-self: center;
`;

const Key = (props) => (

  <KeyContainer>
    {props.number}
  </KeyContainer>

)

export default Key;