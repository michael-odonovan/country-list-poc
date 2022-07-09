import * as React from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import Container from '../components/Container';
import { ALL_COUNTRIES, UK_AND_CHANNEL_ISLES } from '@comicrelief/country-lists';
import { fields } from '../helpers/fields';
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
} from '@comicrelief/component-library';

export default function Index() {

  const {
    register, 
    handleSubmit, 
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: "onBlur",
    shouldFocusError: true,
  });

  return (
    <ThemeProvider theme={crTheme}>
      <Container>
        <form onSubmit={handleSubmit(onSubmit)}>

          <Banner backgroundColor="white">Here comes a form!</Banner>

          <Logo/>

          {fields.map((field) => (
            <>
              <Input 
                id={field.name} 
                type={field.type} 
                placeholder={field.defaultValue}
                label={field.label}
                {...register(field.name, { required: true })}
              />
            </>
          ))}

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

        </form>
      </Container>
    </ThemeProvider>
  )
}
