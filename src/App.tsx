import React, { Fragment, Suspense } from 'react'
import { renderRoutes } from 'react-router-config'
import { HashRouter as Router } from 'react-router-dom'
import Loading from './components/Loading'
import routes from './routes'
import 'antd/dist/antd.less'

function App() {
  return (
    <Fragment>
      <Suspense fallback={<Loading />}>
        <Router>{renderRoutes(routes)}</Router>
      </Suspense>
    </Fragment>
  )
}
export default App
