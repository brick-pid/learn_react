
import React from 'react'
import { Form, Input, Button, Card } from 'antd'
import './Login.scss'
import { useStore } from '../stores/index'
import { observer } from 'mobx-react-lite'
import { useNavigate } from 'react-router-dom'


function Login () {
  const { loginStore } = useStore()
  const navigate = useNavigate()
  const onFinish = (values) => {
    console.log("Received values of form: ", values)
    loginStore.setLoginInfo(values)
    navigate('/')
  }
  return (
    <div className='login'>
      <Card className='login-container' title='登录'>
        <Form
          onFinish={onFinish}>
          <Form.Item
            name='username'
          >
            <Input size="large" placeholder="请输入账号"
            />
          </Form.Item>
          <Form.Item
            name='password'
          >
            <Input size="large" placeholder="请输入密码"
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" size="large" block>
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default observer(Login)