import React, { useState } from 'react';
import {
  Form,
  Input,
  Button,
  Checkbox,
} from 'antd';
import { register } from '../../../api/Api';


export const RegisterForm = () => {
 
  const [input, setInput] = useState({
    email: 'l.huangd@gmail.com',
    password: '123456',
    password2: '123456',
    checked: false,
    firstName: 'Luis',
    lastName: 'Huang'
  })

  const { email, password, password2, checked, firstName, lastName } = input;

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = async () => {
  await register({firstName, lastName, email, password})
    setInput({
        email: '',
        password: '',
        password2: '',
      })
  }

  function onChange(e) {
    setInput({...input,
     checked: e.target.checked});
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
      <Form.Item label="Repetir Contraseña"  
      rules={[
            {
              required: true,
            },
          ]}>
        <Input   
        type="password"
        name="password2"
        value={password2}
        />
      </Form.Item>
      <Form.Item
      onChange={onChange}
      rules={[
            {
              required: true,
            },
          ]}>
        <Checkbox >
          He leído y acepto la política de privacidad
        </Checkbox>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">Enviar</Button>
      </Form.Item>
    </Form>
  );
};
