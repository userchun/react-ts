import React from 'react'
import { withRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
const Home = (props: any) => {
  const { route } = props
  return (
    <div>
      Home
      <div>{renderRoutes(route.routes)}</div>
    </div>
  )
}

export default withRouter(Home)
