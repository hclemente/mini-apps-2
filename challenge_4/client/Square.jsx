import React from 'react';
import styled from 'styled-components';

const SquareContainer = styled.button`
  height: 45px;
  width: 45px;
  background: ${(props) => {if(props.covered) {return '#FF7D33'} else {return '#33CEFF'}}};
  justify-content: center;
  align-self: center;
`;
// FF7D33 : #33CEFF
const Square = (props) => {
  let square = <SquareContainer onClick={()=>props.uncoverSquare(props.square.index)} covered={props.square.covered}>{props.square.index}</SquareContainer>
  if (props.square.mine === 0 && !props.square.covered) {
    square = (
      <SquareContainer onClick={()=>props.uncoverSquare(props.square.index)} covered={props.square.covered}>
        X
      </SquareContainer>
    )
  }
  return (
    <div>{square}</div>
  )
}

export default Square;

