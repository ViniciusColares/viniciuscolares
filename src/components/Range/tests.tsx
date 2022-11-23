import { createRoot } from 'react-dom/client'

import Range from '.'

describe('<Range />', () => {
  it('should render the heading', () => {
    const nextApp = document.getElementById('__next')
    const root = createRoot(nextApp!)
    root.render(
      <Range from="0" to="10" value="5" onSlide={() => console.log()} />
    )
  })
})
