import React from 'react'

import { MainLayout } from '@layouts'
import { Heading } from '@components/Typo'

const Blog = () => {
  return (
    <MainLayout pageTitle="blog">
      <hgroup style={{ marginTop: '3vh' }}>
        <Heading fontSize={5} textAlign="center" mb={1}>
          Meu Blog
        </Heading>
      </hgroup>
    </MainLayout>
  )
}

export default Blog
