import React from 'react';
import './Login.scss';
import logo  from '../../../assets/logo1.png';
import { Layout, Tabs } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import { RegisterForm } from '../../../Components/Auth/Register Form/RegisterForm';
import { LoginForm } from '../../../Components/Auth/LoginForm';

export const Login = ({setLogged}) => {
  const { TabPane } = Tabs;
  return (
    <Layout className="login">
      <Content className="login-content">
        <h1 className="login-logo">
          <img src={logo} alt="logo" />
        </h1>
        <div className="login-content-tabs">
           <Tabs type="card">
             <TabPane tab={<span>Iniciar Sesión</span>} key="1">
              <LoginForm setLogged={setLogged}/>
             </TabPane>
             <TabPane tab={<span>Nuevo Usuario</span>} key="2">
              <RegisterForm/>
             </TabPane>
           </Tabs>
        </div>
      </Content>
    </Layout>
  )
}
