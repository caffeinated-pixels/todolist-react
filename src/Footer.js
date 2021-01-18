import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <footer>
      <p>
        Based on Dave Gray's excellent{' '}
        <a
          href="https://youtu.be/y51Cv4wnsPw"
          title="link to tutorial on YouTube"
        >
          video tutorial
        </a>
      </p>
      <p>
        Rebuilt in React and expanded by{' '}
        <a
          href="https://steviegill-webportfolio.netlify.app/"
          title="Stevie's web app portofolio page"
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
