import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faThumbsUp, faUtensils, faVial, faFireBurner } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Footer = ({ siteTitle }) => (
  <footer className='footer'>
    <div className='container'>
      
      <div className='columns'>
        <div className='column is-4'>
          <h4 className='mb-3 is-size-4 has-text-weight-light has-text-grey'><span className='has-text-weight-medium'>#{siteTitle}</span> is a documentation style recipe box.</h4>
          <p className='has-text-grey'>
            This work is licensed under <a rel='license' href='/'>
            The BSD Zero Clause License</a> ✌️
          </p>
        </div>
        <div className='column is-4'>
          <h4 className='mb-3 is-size-4 has-text-weight-light has-text-grey'><span className='has-text-weight-medium'>View or Contribute</span> on GitHub</h4>
          <p className='mb-2'>
            <a className='button' rel='noreferrer' href='https://github.com/ztbochanski/recipe-ui/' target='_blank'>
              <span className='icon is-large'>
                <FontAwesomeIcon icon={faGithub} />
              </span>
              <span>Source Code</span>
            </a>
          </p>
        </div>
        <div className='column is-4'>
          <h4 className='mb-3 is-size-4 has-text-weight-light has-text-grey'><span className='has-text-weight-medium'>Start 🍑</span></h4>
          
          <Link to='/'>
          <p className='subtitle'>
            <span className='mr-2 icon has-text-success'>
              <FontAwesomeIcon className='' icon={faUtensils} size='lg' />
            </span>
            Home
          </p>
          </Link>
          <Link to='/dashboard'>
          <p className='subtitle'>
            <span className='mr-2 icon'>
              <FontAwesomeIcon className='' icon={faFireBurner} size='lg' />
            </span>
            Dashboard
          </p>
          </Link>
          <a rel='noreferrer' href='https://www.nutrition.gov/usda-ree' target='_blank'>
          <p className='subtitle'>
            <span className='mr-2 mt-2 icon has-text-info'>
              <FontAwesomeIcon className='' icon={faVial} size='lg' />
            </span>
            Research
          </p>
          </a>
          <a href='https://en.wikipedia.org/wiki/Essentialism' rel='noreferrer' target='_blank'>
          <p className='subtitle'>
            <span className='mr-2 mt-2 icon has-text-warning'>
              <FontAwesomeIcon className='' icon={faThumbsUp} size='lg' />
            </span>
            Only the essentials
          </p>
          </a>
          <Link to='/'>
          <p className='subtitle'>
            <span className='mr-2 mt-2 icon has-text-danger'>
              <FontAwesomeIcon className='' icon={faHeart} size='lg' />
            </span>
            Support the creators
          </p>
          </Link>
          
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
