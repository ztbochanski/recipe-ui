import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle, color }) => (
  <nav className={`navbar ${color}`}>
    <div className="container">
      <div className='navbar-brand'>
        <div className='navbar-item'>
          <Link to='/'>#{siteTitle}</Link>
        </div>
      </div>
      
      <div className='navbar-menu'>
        <div className='navbar-end'>
          <div className='navbar-item'>

          </div>
        </div>
      </div>
    </div>
  </nav>
)

export default Header
