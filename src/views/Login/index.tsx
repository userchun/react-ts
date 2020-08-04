import React from 'react'
import { setItem } from '../../utils'
import { Button, ButtonToolbar } from 'rsuite'
const Login = (props: any) => {
  const login = () => {
    setItem('auth', '1')
    setItem('token', 'token')
  }
  return (
    <div>
      <ButtonToolbar>
        <Button onClick={login} color='red' appearance='ghost'>
          登录
        </Button>
      </ButtonToolbar>
    </div>
  )
}

export default Login
