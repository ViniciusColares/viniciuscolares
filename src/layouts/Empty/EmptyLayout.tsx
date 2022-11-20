import React, { ReactNode } from 'react'
import Head from 'next/head'

import * as $ from './style'

const EmptyPage = ({ children }: { children: ReactNode | ReactNode[] }) => {
  return (
    <$.Wrapper>
      <$.Main>
        <Head>
          <title>Vinícius Colares</title>
        </Head>
        <$.MainContent>{children}</$.MainContent>
      </$.Main>
    </$.Wrapper>
  )
}

export default EmptyPage
