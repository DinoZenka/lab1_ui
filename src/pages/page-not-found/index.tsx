import React from 'react'
import { Link } from 'react-router-dom'
import { BASIC_ROUTES } from '../../constants'

const PageNotFound = (props: any) => {
  return (
    <div>
      <h2>404 Page not found</h2>
  <Link to={BASIC_ROUTES.CARS} >Link to cars page</Link>
  </div>
)
}

export default PageNotFound
