import React from 'react'
import ReactDOM from 'react-dom/client'

import { ChakraProvider, extendTheme } from '@chakra-ui/react'

import { App } from './App'

const colors = {
  background: {
    900: '#121214',
    800: '#18181B',
  },
  caption: {
    500: '#71717A',
    400: '#A1A1AA',
    300: '#D4D4D8',
  },
  design: {
    primary: '#8B5CF6',
    success: '#34D399',
    alert: '#F87171',
    text: '#fff',
    shape: '#2A2634',
    overlay: 'rgba(0,0,0,0.6)',
  },
}

const fonts = {
  heading: `'Inter', sans-serif`,
  body: `'Inter', sans-serif`,
}

const styles = {
  global: {
    body: {
      bg: 'background.900',
      color: 'design.text',
    },
  },
}

const theme = extendTheme({ colors, fonts, styles })

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
