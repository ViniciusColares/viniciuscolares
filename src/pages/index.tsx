import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

import MainPage from '@templates/MainPage'
import Flex from '@components/Flex'
import Button from '@components/Button'
import { Text, Heading } from '@components/Typo'

import * as $ from '@styles/pageStyles/homeStyle'

const Home = () => {
  const router = useRouter()

  return (
    <MainPage pageTitle="início">
      <$.MainHeading>
        <Heading fontSize={2}>Revolucione o seu mundo com</Heading>
        <Heading fontSize={6} color="accent">
          tecnologia
        </Heading>
      </$.MainHeading>

      <Flex
        width={[250, 350]}
        height={[250, 350]}
        alignSelf="center"
        my="3vh"
        mx="3vw"
      >
        <Image
          src="/assets/home_illustrations.svg"
          alt="Dummy building a web page"
          layout="fill"
        />
      </Flex>

      <$.CallToAction>
        <Text tag="span">Como fazer isso?</Text>
        <Button
          onClick={() => router.push('/contato')}
          name="Vamos conversar"
          size="big"
        />
      </$.CallToAction>
    </MainPage>
  )
}

export default Home
