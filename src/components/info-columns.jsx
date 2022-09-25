import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKiwiBird, faPepperHot, faCodeBranch } from '@fortawesome/free-solid-svg-icons'

const InfoColumns = () => (
  <div className='columns'>
    <div className='column is-one-third'>
    <article className='media notification has-background-white'>
      <figure className='media-left'>
        <span className='icon has-text-success'>
          <FontAwesomeIcon icon={faKiwiBird} size='lg' pull='left'/>
        </span>
      </figure>
        <div className='media-content'>
          <div className='content'>
            <h1 className='title is-size-4'>Get Creative</h1>
            <h2 className='subtitle is-size-5 has-text-weight-light'>
              What's a few broken eggs? Why not <strong>create</strong>
            </h2>
          </div>
        </div>
      </article>
    </div>

    <div className='column is-one-third'>
    <article className='media notification has-background-white'>
      <figure className='media-left'>
        <span className='icon has-text-danger'>
          <FontAwesomeIcon icon={faPepperHot} size='lg' pull='left'/>
        </span>
      </figure>
        <div className='media-content'>
          <div className='content'>
            <h1 className='title is-size-4'>Explore Flavor</h1>
            <h2 className='subtitle is-size-5 has-text-weight-light'>
              There is something to be said about the <strong>excitement</strong> of new foods
            </h2>
          </div>
        </div>
      </article>
    </div>

    <div className='column is-one-third'>
    <article className='media notification has-background-white'>
      <figure className='media-left'>
        <span className='icon has-text-black'>
          <FontAwesomeIcon icon={faCodeBranch} size='lg' pull='left'/>
        </span>
      </figure>
        <div className='media-content'>
          <div className='content'>
            <h1 className='title is-size-4'>Enjoy Clean</h1>
            <h2 className='subtitle is-size-5 has-text-weight-light'>
              We want you to have a <strong>simple</strong> experience referencing recipes
            </h2>
          </div>
        </div>
      </article>
    </div>
  </div>
)

export default InfoColumns
