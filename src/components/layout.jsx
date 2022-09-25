import React from 'react'
import { useSiteMetadata } from '../hooks/useSiteMetadata'
import Header from './header'
import Footer from './footer'

const Layout = ({ children, index }) => {
  const { title } = useSiteMetadata()
  if (index === 'index') {
    return(
      <div>
        {children}
        <Footer siteTitle={title || `nom nom`} />
      </div>
    )
  }
  else {
    return(
      <div>
        <Header siteTitle={title || `nom nom`} />
        <div className='section'>
          <div className='container'>{children}</div>
        </div>
        <Footer siteTitle={title || `nom nom`} />
      </div>
    )
  }
}

export default Layout
