import React from 'react'
import { Link } from 'react-router-dom'
import { BASIC_ROUTES } from '../../constants'

const HomePage = (props: any) => {
  return (
    <div>
      Home page
      <Link to={BASIC_ROUTES.CARS}>Go to cars page</Link>
    </div>
  )
}

export default HomePage
