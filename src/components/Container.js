import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
  width: 98%;
  max-width: 500px;
  margin: 100px auto;
`;


export default function Container({ children }) {
  return (
    <StyledContainer>
      {children}
    </StyledContainer>
  )
}
