import React from 'react'
import { ThemeProvider, crTheme, Input, Label, Select } from '@comicrelief/component-library'
import Container from '../components/Container'

export default function Index() {
  return (
    <ThemeProvider theme={crTheme}>
      <Container>
        <h2>Country (no western) List</h2>
        <Label label="name">
          <Input/>
        </Label>
        <Label>
          <Input label="address"/>
        </Label>
        <Select
          label="country"
          errorMsg="This is an error message"
          description="Please choose your country"
          greyDescription
          options={[
            { value: 'Option one', displayValue: 'The first option' },
            {
              value: 'Option two',
              displayValue: 'The second option'
            },
            { value: 'Option three', displayValue: 'The third option' },
            { value: 'Option four', displayValue: 'The fourth option' }
          ]}
        />
      </Container>
    </ThemeProvider>
  )
}
