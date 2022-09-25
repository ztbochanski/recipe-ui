import React from 'react'
import { Link } from 'gatsby'

const LinkButton = ({ buttonText, linkPath, size, color }) => (
  <Link className={`button ${size} ${color}`} to={linkPath}>
    {buttonText}
  </Link>
)

export default LinkButton
