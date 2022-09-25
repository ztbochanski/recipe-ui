import React from 'react'


const InfoBar = ({ title }) => {
  const date = new Date()
  return(
  <div className='pl-5 pr-5 pb-3 pt-5 section'>
    <div className=''>
      <h2 className='subtitle'>{date.toDateString()}</h2>
    </div>
    <div className='block'>
      <h1 className='title'>{title}</h1>
    </div>
  </div>
)}

export default InfoBar
