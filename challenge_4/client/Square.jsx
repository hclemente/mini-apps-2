import React from 'react';
import styled from 'styled-components';

const SquareContainer = styled.button`
  height: 45px;
  width: 45px;
  background: #FF7D33;
  justify-content: center;
  align-self: center;
`;

const Square = (props) => {
  return (
    <SquareContainer >
      1
    </SquareContainer>
  )
}

export default Square;

// onClick={()=>props.uncoverSquare(props.number)}