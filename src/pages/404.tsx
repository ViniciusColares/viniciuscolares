import React, { useEffect } from 'react'

import { EmptyLayout } from '@layouts'
import { Heading } from '@components/Typo'
import { useRouter } from 'next/router'

const NotFound = () => {
  const router = useRouter()

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_ON_MAINTENANCE) {
      router.push('/onMaintenance')
    }
  }, [])

  return (
    <EmptyLayout>
      <hgroup style={{ marginTop: '3vh' }}>
        <Heading fontSize={5} textAlign="center" mb={1}>
          Em manutenção
        </Heading>
      </hgroup>
    </EmptyLayout>
  )
}

export default NotFound
