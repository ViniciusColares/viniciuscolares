import { useState, useEffect, useRef } from 'react'
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
  SiNodeDotJs,
  SiWebpack,
  SiJest,
  SiLinux,
  SiWindows,
  SiGit,
  SiGithub,
  SiRuby,
  SiGulp,
  SiStrapi,
  SiMysql,
  SiMongodb,
  SiNextDotJs,
  SiJoomla,
  SiWordpress
} from 'react-icons/si'
import { RiFindReplaceLine, RiKakaoTalkFill } from 'react-icons/ri'

import Crowns from '@public/assets/duolingo/crowns.svg'
import Trophy from '@public/assets/duolingo/trophy.svg'
import FlagBR from '@public/assets/duolingo/flag_pt.svg'
import FlagEN from '@public/assets/duolingo/flag_en.svg'
import FlagFR from '@public/assets/duolingo/flag_fr.svg'
import FlagDE from '@public/assets/duolingo/flag_de.svg'

import { Heading, Text, Label } from '@components/Typo'
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

const Profile = ({ duolingo }: IPerfil) => {
  const { courses } = duolingo
  const timelineStepRef = useRef<HTMLElement>(null)
  const [timelineStep, setTimelineStep] = useState<string>('2021')
  const [timelineHeight, setTimelineHeight] = useState<number | undefined>(0)

  useEffect(() => {
    if (timelineStepRef) {
      const node =
        timelineStepRef?.current?.children[Number(timelineStep) - 2010]
      setTimelineHeight(node?.clientHeight)
    }
  }, [timelineStep])

  const Duolingo = {
    findCourse: (lang: string) =>
      courses.find((course) => course?.learningLanguage === lang),
    getExp: (lang: string) => Duolingo.findCourse(lang)?.xp,
    getCrowns: (lang: string) => Duolingo.findCourse(lang)?.crowns,
    getTotalCrowns: () => courses.reduce((ac, cv) => ac + cv.crowns, 0)
  }
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
            Front-end Web Developer
          </Text>
          <Text mb={0}>Jan de 1992, Aracaju-SE, Brasil</Text>
        </$.Info>
      </$.Profile>

      <$.Intro tag="section" mb={5}>
        <Text mb={0}>
          Desenvolvedor web desde <span>2010</span>, apaixonado por {''}
          <span>desenvolvimento de interfaces e experiências</span>, sem abrir
          mão das boas práticas e performance.
        </Text>
      </$.Intro>

      <Range
        from="2010"
        to="2021"
        value={timelineStep}
        onSlide={setTimelineStep}
      />

      <Heading tag="h2" fontSize={5} textAlign="center" color="accent" mt={2}>
        {timelineStep}
      </Heading>

      <$.Timeline tag="section" flexDirection="column" mb={4} px={3}>
        <$.Carousel height={timelineHeight} ref={timelineStepRef}>
          <$.Step visible={timelineStep === '2010'}>
            <Heading tag="h2">O começo de tudo</Heading>
            <Heading tag="h3">SENAC / R2 Agência Digital</Heading>
            <Text>
              Durante um curso de sistemas de gerenciamento de conteúdo(CMS) no{' '}
              <span>SENAC</span>, meu projeto chamou a atenção da{' '}
              <span>R2 Agência Digital</span>, daí fui chamado pra compor a
              equipe e então comecei como a maioria dos desenvolvedores
              front-end... Desenvolvendo sites.
            </Text>
            <Text>
              <span>Foram</span> muitos sites, muitos péssimos, outros piores,
              mas sem dúvida essas experiências foram <span>essenciais</span>{' '}
              para minha permanência <span>no mundo do</span> front-end, foi um
              início muito legal com <span>HTML</span> e <span>CSS</span>.
            </Text>
          </$.Step>
          <$.Step visible={timelineStep === '2011'}>
            <Heading tag="h2">Um mundo novo</Heading>
            <Heading tag="h3">R2 Agência Digital</Heading>
            <Text>
              <span>Mesmo depois de</span> um ano aprendendo{' '}
              <span>muitas coisas</span>, meu dia a dia ainda era cercado de
              muitas novidades, tanto com as mudanças do{' '}
              <span>que eu já havia aprendido</span>, como também a evolução de
              tudo que ainda não sabia, e algumas que{' '}
              <span>continuo sem saber</span>.
            </Text>
            <Text>
              Cada semana que se passava eu aprendia algo novo, nessa época
              ainda não surgia um framework <span>javaScript</span> por semana,
              mas sempre apareciam novas técnicas em CSS pra melhorar interfaces
              e experiências.
            </Text>
          </$.Step>
          <$.Step visible={timelineStep === '2012'}>
            <Heading tag="h2">Já sou programador?</Heading>
            <Heading tag="h3">R2 Agência Digital</Heading>
            <Text>
              <span>Neste momento já</span> tinha sofrido muito com CSS layouts,
              semântica e acessibilidade em HTML, integração de sites à CMS em
              PHP, <span>era mais que hora de</span> começar a evoluir meu
              javaScript.
            </Text>
            <Text>
              Nesse ano a especificação mais impactante na linguagem já tinha
              sido lançada<span>(ES5-2009)</span>, mas como tudo era novidade,
              precisei começar uns passos atrás... No momento eu só precisava{' '}
              <span>aprender a controlar a DOM e alguns eventos</span>, então
              foi basicamente <span>MooTools e JQuery</span>.
            </Text>
          </$.Step>
          <$.Step visible={timelineStep === '2013'}>
            <Heading tag="h2">Os fundamentos</Heading>
            <Heading tag="h3">R2 Agência Digital</Heading>
            <Text>
              Em meio a guerra dos navegores, foi hora de tentar entender mais
              sobre as <span>APIs nativas, SVG, Browser Engines</span>, e ao
              mesmo tempo tentar acompanhar a papularidade do javaScript, foi o
              momento de tentar entender mais a fundo alguns conceitos básicos
              para aprender mais sobre <span>programação web.</span>
            </Text>
            <Text>
              Passei a ler tudo que passava pela minha frente sobre{' '}
              <span>javascript, comunicação entre serviços</span> e muito mais.
            </Text>
          </$.Step>
          <$.Step visible={timelineStep === '2014'}>
            <Heading tag="h2">Uma fase difícil</Heading>
            <Heading tag="h3">R2 Agência Digital</Heading>
            <Text>
              <span>Não tinha</span> veículo próprio, o trabalho era longe, e
              pra "melhorar" um pouco, tive a ótima de ingressar numa{' '}
              <span>universidade do outro lado da cidade</span>, o ano todo numa
              rotina fudida acordando 6h30 e indo{' '}
              <span>dormir por volta das 00h</span>
              ... eu sei que tem gente em <span>situações bem piores</span>, mas
              não foi fácil.
            </Text>
            <Text>
              Além disso, passei um bom tempo me sentindo estagnado, sem saber
              se estava no caminho certo, duvidando da minha capacidade. Mas eu
              já estava ciente que essa fase chegaria, então{' '}
              <span>continuei acreditando e seguindo em frente</span>.
            </Text>
            <Text>
              Mas uma coisa aconteceu de muito bom, esse foi um ano de{' '}
              <span>MUITO aprendizado.</span>
            </Text>
          </$.Step>
          <$.Step visible={timelineStep === '2015'}>
            <Heading tag="h2">Próximo passo</Heading>
            <Heading tag="h3">S4B</Heading>
            <Text>
              Depois de um 2014 difícil, decidi buscar por novos desafios que me
              permitissem fazer algo <span>novo e diferente</span>, infelizmente
              acabei sendo <span>iludido por falta de experiência</span>, mas
              como tudo na vida é aprendizado, segue o baile.
            </Text>
            <Text>
              Na <span>S4B</span> eu aprendi um pouco a coordenar um pequeno
              time de desenvolvedores, a como trabalhar em equipe num mesmo
              projeto com código versionado em <span>git</span>, trabalhar com{' '}
              <span>pré-processadores CSS</span>, um pouco de <span>Ruby</span>,
              gestão de <span>dependências</span> e aprendi também que seu chefe
              nem sempre está interessado no <span>seu crescimento</span>.
            </Text>
            <Text>
              Dada situação, já era mais do que necessário encontrar{' '}
              <span>novas habilidades</span> pra trilhar{' '}
              <span>novos caminhos</span>.
            </Text>
          </$.Step>
          <$.Step visible={timelineStep === '2016'}>
            <Heading tag="h2">A era dos softwares</Heading>
            <Heading tag="h3">Connectlead</Heading>
            <Text>
              Dado um início de ano bem desanimador, finalmente encontrei uma
              oportuniade pra integrar um time de uma fábrica de desenvolvimento
              de <span>softwares</span>, com direito a{' '}
              <span>versionamento</span> de código, <span>metodologias</span>{' '}
              ágeis, histórias de <span>usuário</span>, treinamentos, gestão de{' '}
              <span>produto</span>, equipe, tarefas e mais.
            </Text>
            <Text>
              Foram <span>muitas sprints</span> e{' '}
              <span>muitos componentes</span> criados e melhorados para atender
              às necessidades dos usuários, além da experiência de trabalhar com
              outros <span>vários times</span> em conjunto, sem deixar de lado
              os estudos em paralelo.
            </Text>
          </$.Step>
          <$.Step visible={timelineStep === '2017'}>
            <Heading tag="h2">Conhecendo por dentro</Heading>
            <Heading tag="h3">Connectlead</Heading>
            <Text>
              Vivi uma enriquecedora <span>experiência</span> neste ano, fazendo
              a <span>implantação</span> do sistema o qual ajudei a desenvolver,
              e isso me ajudou muito a enxergar minha profissão com{' '}
              <span>outra perspectiva</span>, contribuindo e incentivando para a
              construção de um perfil <span>multidisciplinar</span>.
            </Text>
            <Text>
              Sendo assim, já tendo mais de 6 anos de experiência na{' '}
              <span>construção de interfaces</span>, <span>integração</span> de
              sistemas de gerenciamento de conteúdo(<span>CMS</span>) e
              convivendo com mundos tangentes à tecnologia, como{' '}
              <span>marketing</span>, <span>atendimento ao cliente</span> e
              afins, era hora de encontrar <span>novos planos</span>.
            </Text>
          </$.Step>
          <$.Step visible={timelineStep === '2018'}>
            <Heading tag="h2">Meu ano sabático</Heading>
            <Heading tag="h3">-</Heading>
            <Text>
              <span>Uffa!!</span> Finalmente, depois de anos tarbalhando{' '}
              <span>sem férias</span>, um merecido descanso.
            </Text>
            <Text>
              Esse foi o ano pra fazer um pouco <span>diferente</span>:
              <span>reavaliar</span> meus valores, <span>estudar</span> MUITO
              sobre tecnologia e afins, <span>não seguir</span> rotinas,{' '}
              <span>viver</span> novas experiências, <span>descobrir</span>{' '}
              novos interesses, <span>questionar</span> tudo o que sei e o
              porquê de não fazer diferente, <span>viajar</span> um pouco,
              <span>meditar</span> mais, <span>comprar</span> bitcoin e{' '}
              <span>muito mais</span>.
            </Text>
            <Text>
              Foi um ano <span>incrível</span>, de muito{' '}
              <span>aprendizado</span> e muitas <span>conquistas</span>.
            </Text>
          </$.Step>
          <$.Step visible={timelineStep === '2019'}>
            <Heading tag="h2">Novo recomeço</Heading>
            <Heading tag="h3">
              ioasys <Label text="remote" color="yellow" />
            </Heading>
            <Text>
              Acho até que demorei um pouco pra fazer isso, mas depois de quase
              10 anos de <span>experiência e muito estudo</span>, senti que já
              era hora de trabalhar como eu sempre quis, de casa.
            </Text>
            <Text>
              O <span>trabalho remoto</span> + <span>outsourcing</span> me
              permitiram conhecer mais <span>oportunidades</span>,{' '}
              <span>pessoas</span>, <span>ferramentas</span>,{' '}
              <span>lugares</span>. Aprendi a importância da comunicação
              assertiva, auto gestão, definição de prioridades, trabalhar com
              times distribuídos, e o melhor... desbloqueei um novo{' '}
              <span>universo de possibilidades</span>.
            </Text>
            <Text>
              Ajudei a construir algumas aplicações bem legais, como: sistema de{' '}
              <span>gerenciamento de obras</span>, sistema de{' '}
              <span>engajamento corporativo</span>, <span>design system</span>,
              sistema de <span>logística integrada</span> e muito mais.
            </Text>
          </$.Step>
          <$.Step visible={timelineStep === '2020'}>
            <Heading tag="h2">Expansão de horizontes</Heading>
            <Heading tag="h3">ioasys</Heading>
            <Text>
              Um ano <span>bem doido</span>, com direito a{' '}
              <span>tattoo na cara</span> na festa do trabalho, um{' '}
              <span>carnaval diferente</span>, uma <span>PANDEMIA</span>, adoção
              de minha <span>primeira paixão</span> com quatro patas, início do{' '}
              <span>melhor relacionamento</span> que já imaginei ter e o drama
              de um computador novo que se arastou por mais de{' '}
              <span>dois anos</span> pra se tornar realidade.
            </Text>
            <Text>
              Apesar dos pesares foi um ano que me proporcionou os melhores{' '}
              <span>momentos</span> e as melhores <span>conquistas</span>, foi
              sem dúvida o ano mais <span>fora da curva</span> que já vivi.
            </Text>
          </$.Step>
          <$.Step visible={timelineStep === '2021'}>
            <Heading tag="h2">Vivendo de Governança</Heading>
            <Heading tag="h3">Atlas Governance</Heading>
            <Text>
              Até então eu só sabia que <span>Governança Corporativa</span> era
              algo que grandes empresas faziam, mas não sabia exatamente do que
              se tratava.
            </Text>
            <Text>
              Neste ano eu tive a grande satisfação de participar da evolução de
              uma plataforma de governança corporativa simplesmente fantástica,
              digna de muitos elogios por várias empresas muito bem
              conceituadas, contribuindo para o desenvolvimento de
              funcinoalidades como: Assinatura eletrônica e digital, controle de
              acesso por região e muito mais.
            </Text>
          </$.Step>
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
        <SiNodeDotJs />
        <SiWebpack />
        <SiJest />
        <SiLinux />
        <SiWindows />
        <SiGithub />
        <SiRuby />
        <SiGulp />
        <SiStrapi />
        <SiJoomla />
        <SiMysql />
        <SiMongodb />
        <SiNextDotJs />
        <SiWordpress />
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
            <span>não estarem funcionando</span>, ser curioso deu perspectivas
            para tentar entender como <span>tudo funciona</span> sem ser chato
            ou parecer uma obrigação. A curiosidade me ajuda a elaborar as{' '}
            <span>perguntas</span> com as quais eu posso buscar por respostas,
            que me mantêm na busca pelas soluções.
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
        <Flex justifyContent="center">
          <$.LangInfo spaceChildren={3}>
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
              <Text tag="span">{Duolingo.getExp('en') || '-'}</Text>
              <Text tag="span">{Duolingo.getExp('fr') || '-'}</Text>
              <Text tag="span">{Duolingo.getExp('de') || '-'}</Text>
            </$.ExpCol>
            <$.CrownsCol flexDirection="column" spaceChildren={1}>
              <Crowns height={28} />
              <Text tag="span">-</Text>
              <Text tag="span">{Duolingo.getCrowns('en') || '-'}</Text>
              <Text tag="span">{Duolingo.getCrowns('fr') || '-'}</Text>
              <Text tag="span">{Duolingo.getCrowns('de') || '-'}</Text>
            </$.CrownsCol>
          </$.LangInfo>
        </Flex>
      </$.DuolingoSection>
    </MainPage>
  )
}

export default Profile
