import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Hero from '../components/hero'
import Seo from '../components/seo' 
import Layout from '../components/layout'

const PageNotFound = () => (
  <Layout>
  <Hero size='is-fullheight'>
    <h1 className='title is-size-2 is-size-3-mobile'>
      404: Not Found
      </h1>
      <h2 className='subtitle'>Unicorn Pusheen</h2>
      <div className='container ml-6'>
      <StaticImage
        src='../images/pusheen_placeholder.gif'
        alt='A unicorn pusheen'
      />
    </div>
  </Hero>
  </Layout>
)

export const Head = () => <Seo title='404: Not Found' />

export default PageNotFound
