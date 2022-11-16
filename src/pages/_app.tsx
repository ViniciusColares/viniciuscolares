import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from '@styles/global'
import { theme } from '@styles/theme'
import Analytics from '@components/Analytics'
import * as gtag from 'src/lib/gtag'

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
      <Analytics />
    </ThemeProvider>
  )
}

export default App
