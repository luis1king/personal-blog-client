import React from 'react'
import { Layout, Menu } from 'antd'
import MenuItem from 'antd/lib/menu/MenuItem';
import { Link, useLocation } from 'react-router-dom';
import { HomeOutlined, MenuOutlined, UserOutlined } from '@ant-design/icons';
import './MenuSider.scss'

export const MenuSider = ({menuCollapsed}) => {

    const {Sider} = Layout;
    const location = useLocation();

  return (
    <Sider className="menu-sider" collapsed={menuCollapsed}>
          {/* Usamos la location, para determinar en la ruta que estamos ubicados,
         y por tanto que el boton selectec se marque en el menu correcto */}
        <Menu theme="dark" mode="inline" defaultSelectedKeys={location.pathname}>
          <MenuItem key="/admin">
            <Link to={`/admin`}>
            <HomeOutlined />
            <span className="nav-text">Home</span>
            </Link>
          </MenuItem>
          <MenuItem key="2">
            <Link to={`/admin/menu-web`}>
            <MenuOutlined />
            <span className="nav-text">Menu Web</span>
            </Link>
          </MenuItem>
          <MenuItem key="/admin/users">
            <Link to={`/admin/users`}>
            <UserOutlined />
            <span className="nav-text">Users</span>
            </Link>
          </MenuItem>
        </Menu>
    </Sider>
  )
}
