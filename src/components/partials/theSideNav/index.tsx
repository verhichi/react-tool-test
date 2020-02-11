import React from 'react'
import './theSideNav.css'
import { Link } from 'react-router-dom'
import routes from 'routes'

function TheSideNav() {
  const links = routes.map((page, idx) => {
    return (
      <Link key={idx} to={page.path}>
        <div className="v-nav-link">{page.component.name}</div>
      </Link>
    )
  })

  return <nav>{links}</nav>
}

export default TheSideNav
