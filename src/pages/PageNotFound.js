import React from 'react'
import "../styles/pageNotFound.css"
import { useNavigate } from 'react-router-dom'

const PageNotFound = () => {

  const navigate = useNavigate()

  return (
    <section id="page-not-found">
      <div className='flex-centered flex-column full-height'>
        <img src="./images/ghost.gif" alt="404" />
        <h1>Page Not Found!</h1>
        <button className='button' onClick={() => navigate(-1)}>Go Back</button>
      </div>
    </section>
  )
}

export default PageNotFound