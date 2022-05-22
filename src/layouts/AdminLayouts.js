import { Layout } from 'antd';
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { MenuSider } from '../Components/Admin/MenuSider/MenuSider';
import { MenuTop } from '../Components/Admin/MenuTop/MenuTop';
import './AdminLayouts.scss';



export const AdminLayouts = ({setLogged}) => {

    const [menuCollapsed, setMenuCollapsed] = useState(false);
    const { Header, Content, Footer } = Layout;

  return (
    <Layout>
     <MenuSider menuCollapsed={menuCollapsed}/>
        <Layout className="layout-admin" style={{marginLeft: menuCollapsed ? "80px": "200px"}}>
            <Header className="layout-admin-header">
               <MenuTop menuCollapsed={menuCollapsed}
               setMenuCollapsed={setMenuCollapsed}
                 setLogged={setLogged}
               />
            </Header>
            <Content className="layout-admin-content">
            <Outlet/>
            </Content>
            <Footer className="layout-admin-footer">
                Footer...
            </Footer>
        </Layout>
    </Layout>
  )
}
