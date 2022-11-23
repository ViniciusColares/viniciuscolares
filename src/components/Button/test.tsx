import { screen } from '@testing-library/react'
import { createRoot } from 'react-dom/client'
import Button from '.'

describe('Button', () => {
  const nextApp = document.getElementById('__next')
  const root = createRoot(nextApp!)

  it('it should render text inside button', () => {
    root.render(<Button name="botão" />)
    expect(screen.getByRole('button'))
  })

  it('it should render a loading button', () => {
    root.render(<Button name="botão" isLoading data-testid="svgButton" />)
    expect(screen.getByTestId('svgButton'))
  })
})
