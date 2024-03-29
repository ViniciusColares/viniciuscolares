import styled from 'styled-components'
import css from '@styled-system/css'
import { motion } from 'framer-motion'

import { Heading } from '@components/Typo'

import { colors, medias } from '@styles/theme'

export const Wrapper = styled('section')(
  css({
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: `url(/assets/bg.png) left top repeat-x scroll,linear-gradient(to bottom,${colors.primary1} 20%,${colors.primary2} 90%)`,
    backgroundAttachment: 'fixed',
    backgroundSize: '540px',
    width: '100vw',
    height: '100vh',
    overflow: 'hidden',
    zIndex: 0
  })
)

export const Main = styled(motion.main)(
  css({
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    width: '100vw',
    height: '100vh',
    overflow: 'hidden',
    zIndex: 1,
    transformStyle: 'preserve-3d',
    transform: 'perspective(0.5cm)',
    backgroundSize: '100%',
    [medias('sm')]: {
      height: '100%',
      width: '480px'
    }
  })
)

export const MainContent = styled(motion.section)(
  css({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    width: '100%',
    height: '100%',
    overflowX: 'hidden',
    overflowY: 'auto',
    borderRadius: '16px',
    pb: 6,
    zIndex: 1
  })
)

export const Header = styled('header')(
  css({
    position: 'relative',
    display: 'flex',
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    boxSizing: 'content-box',
    height: '30px',
    padding: '20px 0',
    '.menu-trigger': {
      content: "''",
      position: 'absolute',
      left: 4
    }
  })
)

export const PageTitle = styled(Heading)(
  css({
    fontFamily: 'heading',
    justifySelf: 'center',
    margin: 0,
    fontSize: 2,
    lineHeight: '18px',
    fontWeight: 100
  })
)
