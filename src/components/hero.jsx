import React from 'react'
import { Link } from 'gatsby'

const Hero = ({ size, color, brand, children }) => (
  <section className={`hero ${size} ${color}`} style={{ height: '100%' }}>
    <div className='hero-head'>
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <Link className="navbar-item" to='/'>
            {brand}
          </Link>
        </div>
       </div>
    </nav>

    </div>
    <div className='hero-body'>
      <div className='container has-text-centered'>
        {children}
      </div>
    </div>
    <div className='hero-foot'></div>
  </section>
)

export default Hero