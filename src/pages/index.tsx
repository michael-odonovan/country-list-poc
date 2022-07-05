import React from 'react'
import { ThemeProvider, crTheme, Input } from '@comicrelief/component-library'

export default function Index() {
  return (
    <ThemeProvider theme={crTheme}>
      <Input/>
      <h2>hello world</h2>
    </ThemeProvider>
  )
}
