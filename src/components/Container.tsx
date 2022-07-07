import React from 'react'
import { Interface } from 'readline';
import styled from 'styled-components'

const StyledContainer = styled.div`
  width: 98%;
  max-width: 500px;
  margin: 100px auto;
`;

interface Props {
  children: React.ReactNode
}

export default function Container({ children }: Props) {
  return (
    <StyledContainer>
      {children}
    </StyledContainer>
  )
}
