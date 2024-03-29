import React from 'react'
import { IconType } from 'react-icons'
import { VscLoading } from 'react-icons/vsc'
import { MotionProps } from 'framer-motion'
import { SpaceProps } from 'styled-system'

import { Rotate } from '@styles/animations'
import { colors } from '@styles/theme'

import * as $ from './styles'

const Button = ({
  name,
  type = 'button',
  icon: Icon,
  size = 'medium',
  disabled = false,
  isLoading = false,
  ...restProps
}: ButtonProps &
  React.HTMLAttributes<HTMLButtonElement> &
  MotionProps &
  SpaceProps) => {
  return (
    <$.Container>
      <$.ButtonStyle
        type={type}
        size={size}
        disabled={isLoading || disabled}
        {...restProps}
      >
        {isLoading ? (
          <Rotate
            animate={{ rotate: 360 }}
            transition={{
              loop: Infinity,
              ease: 'linear',
              duration: 1
            }}
          >
            <VscLoading size="23px" color="#938CA3" />
          </Rotate>
        ) : (
          <>
            {Icon && <Icon size="24px" color={colors.primaryDark} />}
            {name}
          </>
        )}
      </$.ButtonStyle>
      <$.Shadow />
    </$.Container>
  )
}

export interface ButtonProps {
  name: string
  type?: 'button' | 'submit' | 'reset'
  onClick?: (() => Promise<boolean>) | (() => void)
  disabled?: boolean
  isLoading?: boolean
  size?: 'small' | 'medium' | 'big'
  icon?: IconType
}

export default Button
