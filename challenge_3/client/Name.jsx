import React from 'React';
import styled from 'styled-components';

const NameContainer = styled.div`
  height: 56px;
  width: 176px;
  background: #3633FF;
  color: gold;
  border: 2px solid black;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Name = props => (
  <NameContainer>
    {props.name}
  </NameContainer>
)

export default Name;