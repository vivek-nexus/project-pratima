import '../styles/globals.css'
import { ThemeProvider } from "fictoan-react"
import { FictoanTheme } from '../styles/FictoanTheme'
import { useEffect } from 'react';


function MyApp({ Component, pageProps }) {

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const loader = document.getElementById('globalLoader');
      if (loader)
        loader.style.display = 'none';
    }
  }, []);
  return (
    <ThemeProvider theme={FictoanTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
