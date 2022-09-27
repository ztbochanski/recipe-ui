import React from 'react'
import Seo from '../components/seo'
import Layout from '../components/layout'

const Dashboard = () => (
  <Layout>
    <section className='section'>
      <div className='columns is-multiline'>

        <div className='column is-one-quarter'>
          <div className="card">
            <div className="card-image">
              <figure className="image">
                dynamic image here
              </figure>
            </div>
            <div className="card-content">
              <div className="content">
                <h1 className="title is-4">card content title</h1>
                <h2 className="subtitle is-6">card content subtitle</h2>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  </Layout>
)

export const Head = () => <Seo title='Dashboard' />

export default Dashboard
