import { screen } from '@testing-library/react'
import { createRoot } from 'react-dom/client'

import Textarea from '.'

describe('Textarea Component', () => {
  it('it should render a Textarea', () => {
    const nextApp = document.getElementById('__next')
    const root = createRoot(nextApp!)
    root.render(
      <Textarea
        name="bio"
        placeholder="type something about you"
        rows={4}
        data-testid="bio"
      />
    )
    expect(screen.getByTestId('bio'))
  })
})
