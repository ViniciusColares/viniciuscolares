import React, { ReactNode } from 'react'
import styled from 'styled-components'
import css from '@styled-system/css'
import {
  color,
  ColorProps,
  compose,
  space,
  SpaceProps,
  typography,
  TypographyProps
} from 'styled-system'

const StyledHeading = styled.h1<React.HTMLAttributes<HTMLHeadingElement>>(
  css({
    letterSpacing: '0.7px',
    fontFamily: 'heading',
    fontWeight: '100',
    lineHeight: 1.4,
    margin: '0',
    strong: {
      fontFamily: 'heading',
      color: 'accent'
    }
  }),
  compose(space, color, typography)
)

type HeadingProps = ColorProps &
  SpaceProps &
  TypographyProps & {
    tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
    children: ReactNode
  }

const Heading: React.FC<HeadingProps> = ({ tag = 'h1', children, ...rest }) => {
  return (
    <StyledHeading as={tag} {...rest}>
      {children}
    </StyledHeading>
  )
}

type SystemTextProps = React.FC<HTMLParagraphElement & { color: string }>
const CustomText = styled.p<SystemTextProps>(
  css({
    fontFamily: 'text',
    fontSize: 2,
    fontWeight: '400',
    lineHeight: '1.5',
    margin: '0 0 12px 0',
    'strong, span': {
      fontWeight: '500',
      color: 'accent'
    }
  }),
  ({ color }) => color && css({ color }),
  compose(space, color, typography)
)
interface Text extends SpaceProps, TypographyProps, ColorProps {
  tag?: 'p' | 'span' | 'a'
  color?: string
  children: ReactNode
}
const Text = ({ tag = 'p', children = null, ...rest }: Text) => {
  const ComponentTag = CustomText.withComponent(tag)
  return (
    <ComponentTag as={tag} {...rest}>
      {children}
    </ComponentTag>
  )
}

export { Heading, Text }
