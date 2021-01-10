import React from 'React';
import styled from 'styled-components';

const NameContainer = styled.div`
  height: 60px;
  width: 180px;
  background: orange;
  z-index: 2;
`;

const Name = props => (
  <NameContainer>
    Harry
  </NameContainer>
)

export default Name;