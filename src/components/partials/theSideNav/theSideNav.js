import React from 'react'
import './theSideNav.css'
import { Link } from 'react-router-dom'

class TheSideNav extends React.Component {
  render() {
    return (
      <nav>
        <Link to="/crop/my-cropper">
          <div className="v-nav-link">My Cropper</div>
        </Link>
        <Link to="/crop/croppie">
          <div className="v-nav-link">Croppie</div>
        </Link>
        <Link to="/crop/cropper">
          <div className="v-nav-link">Cropper</div>
        </Link>
      </nav>
    )
  }
}

export default TheSideNav
