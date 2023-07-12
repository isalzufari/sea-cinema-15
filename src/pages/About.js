import React from 'react'

const About = () => {
  return (
    <div className='text-muted'>
      <h1><b>COMPFEST</b></h1>
      <div className='text-center'>
        <img src="/logo512.png" style={{ width: 150, height: 150, objectFit: 'cover' }} className='img-fluid rounded-circle' alt='sea_cinema' />
        <p>A brand-new movie ticket booking app.</p>
      </div>
      <h4>SEA ACADEMY</h4>
      <p>
        Software Engineering Academy bertujuan untuk memperkenalkan
        peserta pada ilmu-ilmu fundamental terkait software engineering
        dan memberikan pengalaman kolaboratif dalam membuat suatu proyek IT.
      </p>
    </div>
  )
}

export default About