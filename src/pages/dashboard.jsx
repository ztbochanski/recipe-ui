import React from 'react'
import Seo from '../components/seo'
import Layout from '../components/layout'

const Dashboard = () => (
  <Layout>
    <section className='section'>
      <div className='columns is-multiline'>
        <div className='column is-quarter'>recipe card</div>
        <div className='column is-quarter'>recipe card</div>
        <div className='column is-quarter'>recipe card</div>
        <div className='column is-quarter'>recipe card</div>
        <div className='column is-quarter'>recipe card</div>
        <div className='column is-quarter'>recipe card</div>
        <div className='column is-quarter'>recipe card</div>
      </div>
    </section>
  </Layout>
)

export const Head = () => <Seo title='Dashboard' />

export default Dashboard
