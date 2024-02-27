import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

type VotePageProps = {
  pollId: string
}

const VotePage = ({ pollId }: VotePageProps) => {
  return (
    <>
      <Metadata title="Vote" description="Vote page" />

      <h1>VotePage</h1>
      <p>
        Find me in <code>./web/src/pages/VotePage/VotePage.tsx</code>
      </p>
      <p>
        My default route is named <code>vote</code>, link to me with `
        <Link to={routes.vote({ pollId: '42' })}>Vote 42</Link>`
      </p>
      <p>The parameter passed to me is {pollId}</p>
    </>
  )
}

export default VotePage
