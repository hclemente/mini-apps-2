import React from 'react';
import styled from 'styled-components';
import Key from './Key';

const KeypadContainer = styled.div`
  height: 56px;
  width: 168px;
  background: white;
  align-self: flex-start;
  border: 2px solid black;
  z-index: 1;
`;

const Keypad = (props) => {

  let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "R"];


  return (
    <KeypadContainer>
      {numbers.map((number, index) =>
        <Key number={number} inputPins={props.inputPins} key={index}/>
      )}
    </KeypadContainer>
  )


}

export default Keypad;