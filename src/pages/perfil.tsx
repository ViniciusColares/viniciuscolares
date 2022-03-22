import { useState, useEffect } from 'react'
import { GetStaticProps } from 'next'
import Image from 'next/image'

import MainPage from '@templates/MainPage'

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiRedux,
  SiPostgresql,
  SiDocker,
  SiNpm,
  SiSass,
  SiNodedotjs,
  SiWebpack,
  SiJest,
  SiLinux,
  SiWindows,
  SiGit,
  SiGithub,
  SiRuby,
  SiGulp,
  SiStrapi,
  SiTravisci,
  SiMysql,
  SiMongodb,
  SiNextdotjs
} from 'react-icons/si'
import { RiFindReplaceLine, RiKakaoTalkFill } from 'react-icons/ri'

import Crowns from '@public/assets/duolingo/crowns.svg'
import Trophy from '@public/assets/duolingo/trophy.svg'
import FlagBR from '@public/assets/duolingo/flag_pt.svg'
import FlagEN from '@public/assets/duolingo/flag_en.svg'
import FlagFR from '@public/assets/duolingo/flag_fr.svg'
import FlagDE from '@public/assets/duolingo/flag_de.svg'

import { Heading, Text } from '@components/Typo'
import Flex from '@components/Flex'

import * as $ from '@styles/pageStyles/profileStyle'
import Range from '@components/Range'

interface IPerfil {
  duolingo: {
    totalXp: number
    streak: number
    lingots: number
    courses: IDuolingoCourse[]
  }
}

interface IDuolingoCourse {
  xp: number
  crowns: number
  learningLanguage: string
}

export const getStaticProps: GetStaticProps = async () => {
  const duolingo = await fetch(
    'https://www.duolingo.com/2017-06-30/users/49543102?fields=totalXp,streak,courses'
  ).then((response) => response.json())

  return {
    props: {
      duolingo
    },
    revalidate: 60
  }
}

const Perfil = ({ duolingo }: IPerfil) => {
  const { courses } = duolingo
  const [timelineStep, setTimelineStep] = useState('2010')

  const findCourse = (lang): IDuolingoCourse | undefined =>
    courses.find((course) => course?.learningLanguage === lang)

  const getExp = (lang): number | undefined => findCourse(lang)?.xp
  const getCrowns = (lang) => findCourse(lang)?.crowns
  const getTotalCrowns = () => courses.reduce((ac, cv) => ac + cv.crowns, 0)

  return (
    <MainPage pageTitle="perfil">
      <$.Profile tag="section" my={5}>
        <Image
          src="/assets/avatar.png"
          alt="An illustration of Vinicius Colares' face"
          layout="fixed"
          quality={100}
          width={59}
          height={80}
        />
        <$.Info>
          <Heading tag="h1">Vinícius Colares</Heading>
          <Text mb={0} color="accent">
            Desenvolvedor Web Front-end
          </Text>
          <Text mb={0}>Jan de 1992, Aracaju-SE, Brasil</Text>
        </$.Info>
      </$.Profile>

      <$.Intro tag="section" mb={5}>
        <Text mb={12}>
          Desenvolvendo profissionalmente para web desde <span>2010</span>,
          trabalhei na criação de <span>dezenas</span> de websites, landing
          pages, interfaces para sistemas e muito mais.
        </Text>
        <Text mb={0}>
          Sempre engajado em construir a melhor{' '}
          <span>experiência de usuário</span> sem deixar de entregar valor para
          o cliente, além de estar sempre estudando e aprendendo com os{' '}
          <i style={{ textDecoration: 'line-through' }}>erros</i>{' '}
          <span>bugs</span> que enfrento.
        </Text>
      </$.Intro>

      <Range
        from="2010"
        to="2022"
        value={timelineStep}
        onSlide={setTimelineStep}
      />

      <Heading tag="h2" fontSize={5} textAlign="center" color="accent" mt={2}>
        {timelineStep}
      </Heading>

      <$.Timeline tag="section" flexDirection="column" mb={5} px={3}>
        <$.Carousel>
          {timelineStep === '2010' && (
            <$.Step>
              <Heading tag="h2">O começo de tudo</Heading>
              <Heading tag="h3">R2 Agência Digital</Heading>
              <Text mb={10}>
                Depois de futucar bastante na internet sobre como a internet
                funcionava, como desenvolver sites e me deparar com coisas
                terríveis como o Xoops, eu tive a oportunidade de fazer um curso
                de <span>Web Design</span> no Senac/SE.
              </Text>
              <Text>
                Daí fui chamado pra trabalhar na <span>R2 agência web</span>, aí
                tudo começou.
              </Text>
            </$.Step>
          )}
          {timelineStep === '2011' && (
            <$.Step>
              <Heading tag="h2">O começo de tudo</Heading>
              <Heading tag="h3">R2 Agência Digital</Heading>
              <Text>
                Acho que comecei como a maioria dos desenvolvedores front-end...
                Desenvolvendo sites, foram muitos sites, só aqui na R2 foram
                mais de 200, aprendi a resolver muitos problemas de interface, a
                pensar na <span>semântica e acessibilidade</span> para os mais
                variados públicos e necessidades.
              </Text>
            </$.Step>
          )}
          {timelineStep === '2012' && (
            <$.Step>
              <Heading tag="h2">O começo de tudo</Heading>
              <Heading tag="h3">R2 Agência Digital</Heading>
              <Text>
                Acho que comecei como a maioria dos desenvolvedores front-end...
                Desenvolvendo sites, foram muitos sites, só aqui na R2 foram
                mais de 200, aprendi a resolver muitos problemas de interface, a
                pensar na <span>semântica e acessibilidade</span> para os mais
                variados públicos e necessidades.
              </Text>
            </$.Step>
          )}
          {timelineStep === '2013' && (
            <$.Step>
              <Heading tag="h2">O começo de tudo</Heading>
              <Heading tag="h3">R2 Agência Digital</Heading>
              <Text>
                Acho que comecei como a maioria dos desenvolvedores front-end...
                Desenvolvendo sites, foram muitos sites, só aqui na R2 foram
                mais de 200, aprendi a resolver muitos problemas de interface, a
                pensar na <span>semântica e acessibilidade</span> para os mais
                variados públicos e necessidades.
              </Text>
            </$.Step>
          )}
          {timelineStep === '2014' && (
            <$.Step>
              <Heading tag="h2">O começo de tudo</Heading>
              <Heading tag="h3">R2 Agência Digital</Heading>
              <Text>
                Acho que comecei como a maioria dos desenvolvedores front-end...
                Desenvolvendo sites, foram muitos sites, só aqui na R2 foram
                mais de 200, aprendi a resolver muitos problemas de interface, a
                pensar na <span>semântica e acessibilidade</span> para os mais
                variados públicos e necessidades.
              </Text>
            </$.Step>
          )}
          {timelineStep === '2015' && (
            <$.Step>
              <Heading tag="h2">Próximo passo</Heading>
              <Heading tag="h3">S4B</Heading>
              <Text>
                Na S4B eu aprendi um pouco a coordenar um pequeno time de
                desenvolvedores, a como trabalhar em equipe num mesmo projeto
                com código versionado em git e aprendi também que seu chefe nem
                sempre está interessado no <span>seu crescimento</span>.
              </Text>
            </$.Step>
          )}
          {timelineStep === '2016' && (
            <$.Step>
              <Heading tag="h2">A era dos softwares</Heading>
              <Heading tag="h3">Connectlead</Heading>
              <Text>
                Aqui eu finalmente comecei a fazer parte do mundo do
                desenvolvimento de softwares, metodologias ágeis, histórias de
                usuário, treinamentos, gestão de produto... Foram muitas sprints
                e muitos componentes criados e melhorados para atender às
                necessidades dos usuários. Além da experiência de trabalhar com
                outros <span>vários times</span> em conjunto.
              </Text>
            </$.Step>
          )}
          {timelineStep === '2017' && (
            <$.Step>
              <Heading tag="h2">A era dos softwares</Heading>
              <Heading tag="h3">Connectlead</Heading>
              <Text>
                Aqui eu finalmente comecei a fazer parte do mundo do
                desenvolvimento de softwares, metodologias ágeis, histórias de
                usuário, treinamentos, gestão de produto... Foram muitas sprints
                e muitos componentes criados e melhorados para atender às
                necessidades dos usuários. Além da experiência de trabalhar com
                outros <span>vários times</span> em conjunto.
              </Text>
            </$.Step>
          )}
          {timelineStep === '2018' && (
            <$.Step>
              <Heading tag="h2">Meu ano sabático</Heading>
              <Heading tag="h3">-</Heading>
              <Text>
                Depois de um bom tempo estudando e praticanto React.js, fui
                convidado a integrar um time com o objetivo de desenvolver uma
                carteira digital, ótima experiência ... Aprendi sobre
                gerenciamento de estado, fluxo de dados, integração de serviços
                e o mais importante, aprendi que nem sempre as pessoas querem o{' '}
                <span>melhor para o projeto</span>, se esse melhor não vier
                delas.
              </Text>
            </$.Step>
          )}
          {timelineStep === '2019' && (
            <$.Step>
              <Heading tag="h2">Expansão de horizontes</Heading>
              <Heading tag="h3">ioasys</Heading>
              <Text>
                Depois de quase 10 anos de experiência, finalmente me permiti
                viver o <span>trabalho remoto</span>, a melhor fase ... Aprendi
                a importância de estar sozinho, me auto gerenciar, definir
                prioridades, trabalhar com times distribuídos, e o mais
                importante ... ainda tem muito caminho pela frente.
              </Text>
            </$.Step>
          )}
          {timelineStep === '2020' && (
            <$.Step>
              <Heading tag="h2">Expansão de horizontes</Heading>
              <Heading tag="h3">ioasys</Heading>
              <Text>
                Depois de quase 10 anos de experiência, finalmente me permiti
                viver o <span>trabalho remoto</span>, a melhor fase ... Aprendi
                a importância de estar sozinho, me auto gerenciar, definir
                prioridades, trabalhar com times distribuídos, e o mais
                importante ... ainda tem muito caminho pela frente.
              </Text>
            </$.Step>
          )}
          {timelineStep === '2021' && (
            <$.Step>
              <Heading tag="h2">Hora da governança</Heading>
              <Heading tag="h3">Atlas Governance</Heading>
              <Text mb={10}>
                Finalmente cheguei num lugar bom de estar, sendo bem remunerado,
                tendo voz e sendo constantemente desafiado. Participei da
                construção do Atlas Sign, uma ferramenta para assinatura
                eletrônica e digital, construi outras funcionaliades muito
                legais como Restrição de acesso por IP/Região e Permissionamento
                de conteúdo em massa.
              </Text>
              <Text>
                Melhorei fluxos de dados, interfaces e feedbacks para usuário,
                usabilidade e perormance da ferramenta core da empresa.
              </Text>
            </$.Step>
          )}
          {timelineStep === '2022' && (
            <$.Step>
              <Heading tag="h2">Novos Desafios</Heading>
              <Heading tag="h3">Atlas Governance</Heading>
              <Text mb={10}>
                Finalmente cheguei num lugar bom de estar, sendo bem remunerado,
                tendo voz e sendo constantemente desafiado. Participei da
                construção do Atlas Sign, uma ferramenta para assinatura
                eletrônica e digital, construi outras funcionaliades muito
                legais como Restrição de acesso por IP/Região e Permissionamento
                de conteúdo em massa.
              </Text>
              <Text>
                Melhorei fluxos de dados, interfaces e feedbacks para usuário,
                usabilidade e perormance da ferramenta core da empresa.
              </Text>
            </$.Step>
          )}
        </$.Carousel>
      </$.Timeline>

      <$.Knowledge tag="section" mb={5}>
        <SiHtml5 />
        <SiCss3 />
        <SiJavascript />
        <SiReact />
        <SiRedux />
        <SiPostgresql />
        <SiDocker />
        <SiGit />
        <SiNpm />
        <SiSass />
        <SiNodedotjs />
        <SiWebpack />
        <SiJest />
        <SiLinux />
        <SiWindows />
        <SiGithub />
        <SiRuby />
        <SiGulp />
        <SiStrapi />
        <SiTravisci />
        <SiMysql />
        <SiMongodb />
        <SiNextdotjs />
      </$.Knowledge>

      <$.AdditionalInfo tag="section" mb={6}>
        <Flex flexDirection="column" mb={4}>
          <$.SectionSubTitle tag="h2" mb={2}>
            <RiFindReplaceLine size={28} />
            Curioso
          </$.SectionSubTitle>
          <Text mb={0}>
            Sempre fiquei intrigado com a sensação de <span>não saber</span>{' '}
            como as coisas funcionam e/ou o porquê de{' '}
            <span>não estarem funcionando</span>, ser curioso me abriu
            possibilidades para entender como <span>tudo é feito</span> sem me
            cansar. A curiosidade me ajuda a elaborar as <span>perguntas</span>{' '}
            com as quais eu posso buscar por respostas, que me mantêm na busca
            pelas soluções.
          </Text>
        </Flex>
        <Flex flexDirection="column">
          <$.SectionSubTitle tag="h2" mb={2}>
            <RiKakaoTalkFill size={28} />
            Comunicativo
          </$.SectionSubTitle>
          <Text mb={0}>
            Muito foi feito pela humanidade, pra não dizer tudo, graças à
            capacidade que o ser humano tem de <span>se comunicar</span>, não
            apenas relatar o que viveu, mas também poder <span>ouvir</span> com
            atenção o que o outro passou... Acredito que a comunicação seja uma
            das <span>mais importantes</span> habilidades pra qualquer ser
            humano, e que nos permite <span>colaborar</span> e solucionar
            problemas. E então, vamos conversar um pouco?!
          </Text>
        </Flex>
      </$.AdditionalInfo>

      <$.DuolingoSection tag="aside">
        <header
          onClick={() =>
            window.open(
              'https://invite.duolingo.com/BDHTZTB5CWWKTSJQSN5RY2L3EU',
              '_blank'
            )
          }
        >
          <Image
            src="/assets/duolingo/duolingo_mascot.png"
            alt="Duolingo mascot"
            quality={100}
            width={72}
            height={64}
          />
          <Flex>
            <Image
              src="/assets/duolingo/duolingo_logo.png"
              alt="Duolingo brand"
              quality={100}
              width={100}
              height={24}
            />
          </Flex>
        </header>
        <Flex justifyContent="space-around" pt={24} pb={0}>
          <$.LangCol flexDirection="column" spaceChildren={1}>
            <Text tag="span">Idioma</Text>
            <FlagBR title="Português(pt-br)" width={60} height={40} />
            <Flex>
              <FlagEN title="Inglês(en)" width={60} height={40} />
              <Trophy
                className="trophy"
                title="Troféu"
                width={35}
                height={35}
              />
            </Flex>
            <FlagFR title="Francês(fr)" width={60} height={40} />
            <FlagDE title="Alemão(de)" width={60} height={40} />
          </$.LangCol>
          <$.ExpCol flexDirection="column" spaceChildren={1}>
            <Text tag="span">Exp</Text>
            <Text tag="span" color="#78C800 !important">
              nativo
            </Text>
            <Text tag="span">{getExp('en') || '-'}</Text>
            <Text tag="span">{getExp('fr') || '-'}</Text>
            <Text tag="span">{getExp('de') || '-'}</Text>
          </$.ExpCol>
          <$.CrownsCol flexDirection="column" spaceChildren={1}>
            <Crowns height={28} />
            <Text tag="span">-</Text>
            <Text tag="span">{getCrowns('en') || '-'}</Text>
            <Text tag="span">{getCrowns('fr') || '-'}</Text>
            <Text tag="span">{getCrowns('de') || '-'}</Text>
          </$.CrownsCol>
        </Flex>
      </$.DuolingoSection>
    </MainPage>
  )
}

export default Perfil
