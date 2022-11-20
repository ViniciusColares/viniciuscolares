import React from 'react'

import { Heading, Text } from '@components/Typo'
import { EmptyLayout } from '@layouts'
import Flex from '@components/Flex'
import {
  SiDevdotto,
  SiGithub,
  SiInstagram,
  SiLinkedin,
  SiTwitter
} from 'react-icons/si'

import * as $ from '@styles/pageStyles/contactStyle'
import Image from 'next/image'

const onMaintenance = () => {
  return (
    <EmptyLayout>
      <hgroup style={{ marginTop: '3vh' }}>
        <Heading fontSize={5} textAlign="center">
          Vinicius <strong>Colares</strong>
        </Heading>
        <Heading ml={145} mt={'-5px'} fontSize={2} textAlign="center">
          Web Developer
        </Heading>
      </hgroup>

      <Flex flexDirection="column" mt={5}>
        <Text textAlign="center" mb={4}>
          Desenvolvendo experiências na internet há mais de{' '}
          <strong>10 anos</strong>, focado em oferecer soluções produtivas e
          divertidas.
        </Text>
        <Text textAlign="center" mb={4}>
          Já <strong>gerei tráfego</strong> e conquistei clientes para centenas
          de empresas, conectei <strong>milhares de usuários</strong> à
          serviços, diverti e informei milhões de pessoas.
        </Text>
        <Text textAlign="center">
          Estou reconstruindo meu portfólio, pra contar a{' '}
          <strong>minha história com a internet</strong> e também pra me
          divertir praticando essa atividade fantástica que é
        </Text>
        <Heading
          fontSize={4}
          letterSpacing={0.3}
          mt={-3}
          color="primaryDark"
          textAlign="center"
        >
          <strong>&lt;</strong>Desenvolver <strong>/&gt;</strong>
        </Heading>
      </Flex>

      <Flex flexDirection="column" alignItems="stretch" mt={6}>
        <Heading fontSize={5} color="accent" textAlign="center" mb={4}>
          Me encontre também
        </Heading>

        <Flex flex={1} justifyContent="space-evenly" alignItems="center">
          <Flex flexDirection="column" spaceChildren={3}>
            <$.Social
              href="https://www.instagram.com/viniciuscolares.dev/"
              target="blank"
            >
              <SiInstagram size={22} color="white" /> Instagram
            </$.Social>
            <$.Social
              href="https://www.linkedin.com/in/viniciuscolares/"
              target="blank"
            >
              <SiLinkedin size={22} color="white" /> LinkedIn
            </$.Social>
            <$.Social href="https://twitter.com/viniciuscoIares" target="blank">
              <SiTwitter size={22} color="white" /> Twitter
            </$.Social>
            <$.Social href="https://github.com/ViniciusColares" target="blank">
              <SiGithub size={22} color="white" /> Github
            </$.Social>
            <$.Social href="https://dev.to/viniciuscolares" target="blank">
              <SiDevdotto size={22} color="white" /> Dev.to
            </$.Social>
          </Flex>

          <Image
            alt="Screen with some social app icons"
            width={212}
            height={180}
            src="/assets/social.png"
          />
        </Flex>
      </Flex>
    </EmptyLayout>
  )
}

export default onMaintenance
