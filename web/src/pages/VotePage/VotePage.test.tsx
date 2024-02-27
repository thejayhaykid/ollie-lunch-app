import { render } from '@redwoodjs/testing/web'

import VotePage from './VotePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('VotePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<VotePage pollId={'42'} />)
    }).not.toThrow()
  })
})
