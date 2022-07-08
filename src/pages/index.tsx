import * as React from 'react'
import Container from '../components/Container'
import { ALL_COUNTRIES, UK_AND_CHANNEL_ISLES } from '@comicrelief/country-lists'
import { fields } from '../helpers/fields'
import { 
  ThemeProvider, 
  crTheme, 
  Input, 
  Label, 
  Select,
  ButtonWithStates,
  Banner,
  Logo,
  // @ts-ignore
} from '@comicrelief/component-library'

export default function Index() {

  console.log(fields)

  return (
    <ThemeProvider theme={crTheme}>
      <Container>

        <Banner backgroundColor="white">Here comes a form!</Banner>

        <Logo/>

        {fields.map(field => 
          <Label label={field.label}>
            <Input name={field.name} type={field.type} defaultValue={field.defaultValue}/>
          </Label>
        )}

        <Select
          label="Are you from the UK?"
          errorMsg="This is an error message"
          description="Please choose your country"
          greyDescription
          options={ UK_AND_CHANNEL_ISLES.getSelectItems() }
        />
        <Select
          label="Are you from somewhere else in the world?"
          errorMsg="This is an error message"
          description="Please choose your country"
          greyDescription
          options={ ALL_COUNTRIES.getSelectItems() }
        />

        <ButtonWithStates>Submit</ButtonWithStates>

      </Container>
    </ThemeProvider>
  )
}
