import React, { ComponentProps } from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import Checkbox from '.'

export default {
  title: 'Core/Checkbox',
  component: Checkbox
} as Meta

const Template: Story<ComponentProps<typeof Checkbox>> = (args) => (
  <Checkbox {...args} />
)

export const Basic = Template.bind({})
Basic.args = {
  label: 'Remember me'
}
Basic.argTypes = { onClick: { action: 'clicked' } }
