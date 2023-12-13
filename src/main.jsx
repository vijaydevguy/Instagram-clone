import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider, ThemeProvider, CSSReset  } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import {mode} from '@chakra-ui/theme-tools'
import { BrowserRouter } from 'react-router-dom'

const styles ={
  global:(props) =>({
    body :{
      bg : mode("gray.100","#000000")(props),
      color:mode("gray.800","whiteAlpha.900")(props)
    }
  })
}

// 2. Add your color mode config
const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

// 3. extend the theme
const theme = extendTheme({ config, styles })

// console.log(theme)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode theme={theme}>
    <BrowserRouter>
      <ChakraProvider >
      <CSSReset />
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
      </ChakraProvider>
    </BrowserRouter>
   
  </React.StrictMode>,
)
