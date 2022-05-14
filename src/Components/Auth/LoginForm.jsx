import React, { useState } from 'react';
import {
  Form,
  Input,
  Button,
} from 'antd';
import { SingIn } from '../../api/Api';
import { useNavigate } from 'react-router-dom';


export const LoginForm = ({setLogged}) => {

 const navigate = useNavigate();
  const [input, setInput] = useState({
    email: 'l.huangd@gmail.com',
    password: '123456',
  })

  const { email, password } = input;

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = async () => {
      await SingIn({email, password})
    const token = localStorage.getItem('token'); 
    console.log(token)
    if (token) {
        setLogged(true)
        navigate('/admin')
    }
    setInput({
        email: '',
        password: '',
      })
  }

  return (
    <Form
      onFinish={handleSubmit}
      onChange={handleChange}
      layout="vertical"
    >
      <Form.Item label="Email"
       rules={[
            {
              required: true,
            },
          ]}
        >
        <Input 
        name="email"
        value={email}
        type="email"
         />
      </Form.Item>
      <Form.Item label="Contraseña" 
      onChange={handleChange}
      rules={[
            {
              required: true,
            },
          ]}>
      <Input   
        type="password"
        name="password"
        value={password}
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" >Iniciar Sesión</Button>
      </Form.Item>
    </Form>
  );
};
