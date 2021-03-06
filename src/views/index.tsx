import React, { memo, useEffect } from 'react'
import { renderRoutes } from 'react-router-config'
import { withRouter } from 'react-router-dom'
import { getItem } from '../utils/'
export default memo(
  withRouter(function AllViews(props: any) {
    const {
      location: { pathname },
      route: { routes },
      history,
    } = props
    useEffect(() => {
      const token = getItem('token')
      if (!token || pathname === '/') {
        history.push('/login')
      }
    }, [history, pathname])
    return <>{renderRoutes(routes)}</>
  }),
)
