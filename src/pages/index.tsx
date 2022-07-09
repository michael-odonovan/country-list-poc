import * as React from 'react';
import Container from '../components/Container';
import Form from '../components/form/Form';
import { 
  ThemeProvider, 
  crTheme, 
  Logo,
  // @ts-ignore
} from '@comicrelief/component-library';

export default function Index() {
  return (
    <ThemeProvider theme={crTheme}>
      <Container>
        <Logo/>
        <Form/>
      </Container>
    </ThemeProvider>
  )
}
