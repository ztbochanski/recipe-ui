import React from 'react'
import Seo from '../components/seo'
import InfoColumns from '../components/info-columns'
import Hero from '../components/hero'
import LinkButton from '../components/link-button'
import Layout from '../components/layout'
import { useSiteMetadata } from '../hooks/useSiteMetadata'
import '../index.scss'

const LANDING_TEXT = 'easy recipes. documentation style.'
const BUTTON_TEXT = 'Get Started'
const PATH = '/dashboard'
const BUTTON_SIZE = 'is-medium'

const IndexPage = () => {
  const { title } = useSiteMetadata()
  return(
  <Layout index='index'>
    <Seo title='Home' />
    <Hero size='is-fullheight' color='is-black' brand={`#${title}`}>
      <h1 className='title is-size-2 is-size-3-mobile'>
        {LANDING_TEXT}
      </h1>
      <LinkButton buttonText={BUTTON_TEXT} size={BUTTON_SIZE} linkPath={PATH}/>
    </Hero>
    
    <div className='section'>
      <div className='container'>
        <InfoColumns />
      </div>
    </div>

    <div className='columns is-desktop m-0'>
      <div className='column p-0'>
        <Hero size='is-medium' color='is-danger'>
          <h2 className='subtitle is-size-4 is-size-5-mobile'>
            We are <strong>against</strong> clutter, ad surface area, and me stories. 
            A straight-to-the-point, documentation style recipe box.
          </h2>
        </Hero>
      </div>
      <div className='column p-0'>
        <Hero size='is-medium'>
          <p className='subtitle is-size-4 is-size-5-mobile'>
            The idea is to <strong>compile culinary formulae</strong> into a readable format.
          </p>
        </Hero>
      </div>
    </div>
  </Layout>
)}


/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title='Home' />

export default IndexPage
