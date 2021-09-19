import { ReactNode, forwardRef, RefObject } from 'react'
import styled from 'styled-components'
import css from '@styled-system/css'
import {
  compose,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  space,
  SpaceProps,
  position,
  PositionProps
} from 'styled-system'
import { motion, MotionProps } from 'framer-motion'

interface Grid
  extends FlexboxProps,
    SpaceProps,
    LayoutProps,
    PositionProps,
    MotionProps {
  tag?: 'div' | 'section' | 'form' | 'aside' | 'header' | 'footer'
  children?: ReactNode
  spaceChildren?: number
  ref?: RefObject<HTMLElement> | null
}
const CustomGrid = styled(motion.div)<Grid>(
  css({
    display: 'flex',
    position: 'relative'
  }),
  ({ spaceChildren, flexDirection = 'row' }) => {
    switch (flexDirection) {
      case 'column':
        return css({
          '> :nth-child(n):not(:last-child)': {
            marginBottom: spaceChildren
          }
        })
      case 'row-reverse':
        return css({
          '> :nth-child(n):not(:last-child)': {
            marginLeft: spaceChildren
          }
        })
      case 'column-reverse':
        return css({
          '> :nth-child(n):not(:last-child)': {
            marginTop: spaceChildren
          }
        })
      default:
        return css({
          '> :nth-child(n):not(:last-child)': {
            marginRight: spaceChildren
          }
        })
    }
  },
  compose(space, layout, flexbox, position)
)

const Flex = forwardRef<HTMLElement, Grid>(
  ({ tag = 'div', children, ...rest }, ref) => (
    <CustomGrid as={tag} ref={ref} {...rest}>
      {children}
    </CustomGrid>
  )
)

export default Flex
