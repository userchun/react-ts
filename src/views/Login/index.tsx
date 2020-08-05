import React, { Fragment } from 'react'
import { setItem, getItem } from '../../utils'
import { Button } from 'antd'
const oldAuth = getItem('auth')

const Login = (props: any) => {
  const { history } = props
  const login = () => {
    const newAuth = '1'
    setItem('auth', newAuth)
    setItem('token', 'token')
    history.push('/home')
    if (oldAuth !== newAuth) {
      window.location.reload()
    }
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
