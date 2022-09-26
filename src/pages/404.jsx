import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo' 
import Layout from '../components/layout'

const PageNotFound = () => (
  <Layout>
    <h1 className='title is-size-2 is-size-3-mobile'>
    404: Not Found
    </h1>
    <h2 className='subtitle'>Unicorn Pusheen</h2>
    <StaticImage
      src='../images/pusheen_placeholder.gif'
      alt='A unicorn pusheen'
      placeholder='blurred'
      layout='constrained'
    />
  </Layout>
)

export const Head = () => <Seo title='404: Not Found' />

export default PageNotFound
