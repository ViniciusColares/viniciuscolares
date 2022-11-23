import { screen } from '@testing-library/react'
import { createRoot } from 'react-dom/client'

import Input from '.'

describe('Input', () => {
  it('it should render a Input with label', () => {
    const nextApp = document.getElementById('__next')
    const root = createRoot(nextApp!)
    root.render(
      <Input name="name" placeholder="escreva seu nome" data-testid="name" />
    )
    expect(screen.getByTestId('name'))
  })
})
