import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <footer>
      <p>
        Coded by{' '}
        <a
          href="https://steviegill-webportfolio.netlify.app/"
          title="Stevie Gill's portofolio page"
        >
          Stevie Gill
        </a>
      </p>
      <p>
        <a
          href="https://github.com/caffeinated-pixels/todolist-react"
          title="To-Do app Github repo"
        >
          <FontAwesomeIcon icon={faGithubSquare} className="githubIcon" />{' '}
          Github repo
        </a>
      </p>
    </footer>
  )
}
