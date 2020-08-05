import React, { Fragment } from 'react'
import { setItem } from '../../utils'
import { Button } from 'antd'

const Login = (props: any) => {
  const { history } = props
  const login = () => {
    setItem('auth', '1')
    setItem('token', 'token')
    history.push('/home')
    window.location.reload()
  }
  return (
    <Fragment>
      <Button type='primary' onClick={login}>
        登录
      </Button>
    </Fragment>
  )
}

export default Login
