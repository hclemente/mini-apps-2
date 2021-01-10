import React from 'react';
import styled from 'styled-components';

const KeyContainer = styled.button`
  height: 30px;
  width: 30px;
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