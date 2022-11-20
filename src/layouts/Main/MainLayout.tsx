import React, { ReactNode, useEffect } from 'react'
import Head from 'next/head'

import Menu from '@components/Menu'
import * as $ from './style'
import { useRouter } from 'next/router'

const MainPage = ({
  pageTitle,
  children
}: {
  pageTitle?: string
  children: ReactNode | ReactNode[]
}) => {
  const router = useRouter()

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_ON_MAINTENANCE) {
      router.push('/onMaintenance')
    }
  }, [])

  return (
    <$.Wrapper>
      <$.Main>
        <Head>
          <title>Vinícius Colares</title>
        </Head>
        <$.MainContent>
          {pageTitle && (
            <$.Header>
              <$.PageTitle>{pageTitle}</$.PageTitle>
            </$.Header>
          )}
          {children}
          <Menu />
        </$.MainContent>
      </$.Main>
    </$.Wrapper>
  )
}

export default MainPage
