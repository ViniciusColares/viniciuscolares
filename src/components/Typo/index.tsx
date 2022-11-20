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
  TypographyProps,
  layout,
  LayoutProps
} from 'styled-system'

// HEADING COMPONENT
interface HeadingProps
  extends SpaceProps,
    TypographyProps,
    ColorProps,
    LayoutProps {
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  color?: string
  children: ReactNode
}

type StyledHeadingProps = React.FC<HTMLHeadingElement>

const StyledHeading = styled.h1<StyledHeadingProps>(
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
  ({ color }) => color && css({ color: color || 'white' }),
  compose(space, color, typography, layout)
)

const Heading: React.FC<HeadingProps> = ({ tag = 'h1', children, ...rest }) => {
  const HeadingTag = StyledHeading.withComponent(tag)
  return <HeadingTag {...rest}>{children}</HeadingTag>
}

// TEXT COMPONENT
interface TextProps
  extends SpaceProps,
    TypographyProps,
    ColorProps,
    LayoutProps {
  tag?: 'p' | 'span' | 'a'
  color?: string
  children: ReactNode
}
type StyledTextProps = React.FC<HTMLParagraphElement & { color: string }>
const StyledText = styled.p<StyledTextProps>(
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
  compose(space, color, typography, layout)
)
const Text: React.FC<TextProps> = ({ tag = 'p', children, ...rest }) => {
  const TextTag = StyledText.withComponent(tag)
  return <TextTag {...rest}>{children}</TextTag>
}

export { Heading, Text }
