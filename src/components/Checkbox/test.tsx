import { screen } from '@testing-library/react'
import { createRoot } from 'react-dom/client'

import Checkbox from '.'

describe('Checkbox', () => {
  it('it should render a Checkbox with label', () => {
    const nextApp = document.getElementById('__next')
    const root = createRoot(nextApp!)
    root.render(<Checkbox label="remember me" />)
    expect(screen.getByRole('checkbox'))
  })
})
