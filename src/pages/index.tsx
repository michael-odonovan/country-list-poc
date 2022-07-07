import React from 'react'
import { ThemeProvider, crTheme, Input, Label, Select } from '@comicrelief/component-library'
import Container from '../components/Container'
import { ALL_COUNTRIES } from '@comicrelief/country-lists'

export default function Index() {

  console.log("UK list", ALL_COUNTRIES.getSelectItems())

  return (
    <ThemeProvider theme={crTheme}>
      <Container>

        <h2>CR country list</h2>

        <Label label="name">
          <Input name="name"/>
        </Label>

        <Label label="address">
          <Input name="address"/>
        </Label>

        <Select
          label="country"
          errorMsg="This is an error message"
          description="Please choose your country"
          greyDescription
          options={ ALL_COUNTRIES.getSelectItems() }
        />

      </Container>
    </ThemeProvider>
  )
}
