import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  fonts: {
    heading: `'Josefin Sans', sans-serif`,
    body: `'Inter', sans-serif`,
  },
  colors: {
    gray: {
      900: '#030104',
    },
    brand: {
      500: '#fad6ff',
    },
  },
  styles: {
    global: {
      body: {
        bg: 'gray.900',
      },
    },
  },
})
