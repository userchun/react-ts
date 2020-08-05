import React from 'react'
import { withRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { Button } from 'antd'
const Home = (props: any) => {
  const { route, history } = props
  return (
    <div>
      <Button
        onClick={() => {
          history.push('/home/student')
        }}>
        跳转
      </Button>
      <div>{renderRoutes(route.routes)}</div>
    </div>
  )
}

export default withRouter(Home)
