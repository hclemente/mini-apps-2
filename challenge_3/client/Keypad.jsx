import React from 'react';
import styled from 'styled-components';
import Key from './Key';

const KeypadContainer = styled.div`
  height: 56px;
  width: 140px;
  background: white;
  align-self: flex-start;
  border: 2px solid black;
  z-index: 1;
`;

const Keypad = (props) => {

  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


  return (
    <KeypadContainer>
      {numbers.map((number) =>
        <Key number={number}/>
      )}
    </KeypadContainer>
  )


}

export default Keypad;