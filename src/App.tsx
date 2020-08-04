import React, { Fragment, Suspense } from 'react'
import { renderRoutes } from 'react-router-config'
import { HashRouter as Router } from 'react-router-dom'
import routes from './routes'

function App() {
  return (
    <Fragment>
      <Suspense fallback='loading'>
        <Router>{renderRoutes(routes)}</Router>
      </Suspense>
    </Fragment>
  )
}
export default App
