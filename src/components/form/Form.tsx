import * as React from 'react';
import { useForm, FieldValues } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import { ALL_COUNTRIES, UK_AND_CHANNEL_ISLES } from '@comicrelief/country-lists';
import { fields } from './fields';
import { validationSchema } from './validationSchema'
import Container from '../../styles/Container';
import Form from '../../styles/Form';
import { 
  ThemeProvider, 
  crTheme, 
  Input, 
  Select,
  ButtonWithStates,
  // @ts-ignore
} from '@comicrelief/component-library';


export default function Form() {

  const onSubmit = async (formData: FieldValues) => {
    const isValid = await validationSchema.isValid(formData);

    if (isValid) {
      console.log(formData)
    }
  };

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
        <Form onSubmit={handleSubmit(onSubmit)}>

          {fields.map((field) => (
            <div key={field.name}>
              <Input 
                id={field.name} 
                type={field.type} 
                placeholder={field.defaultValue}
                label={field.label}
                {...register(field.name, { required: true })}
              />
            </div>
          ))}

          <Select
            {...register("UKCountries", { required: true })}
            label="Are you from the UK?"
            errorMsg="This is an error message"
            description="Please choose your country"
            greyDescription
            options={ UK_AND_CHANNEL_ISLES.getSelectItems() }
          />
          <Select
            {...register("AllCountries", { required: true })}
            label="Are you from somewhere else in the world?"
            errorMsg="This is an error message"
            description="Please choose your country"
            greyDescription
            options={ ALL_COUNTRIES.getSelectItems() }
          />

          <ButtonWithStates>Submit</ButtonWithStates>

        </Form>
      </Container>
    </ThemeProvider>
  )
}
