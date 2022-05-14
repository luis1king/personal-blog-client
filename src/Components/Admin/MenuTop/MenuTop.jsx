import React from 'react';
import './MenuTop.scss';
import Sito from '../../../assets/logo1.png';
import { Button } from 'antd';
import { MenuFoldOutlined, MenuOutlined, PoweroffOutlined } from '@ant-design/icons';
import { logout } from '../../../api/Api';
import { useNavigate } from 'react-router-dom';


export const MenuTop = ({menuCollapsed, setMenuCollapsed, setLogged}) => {
const nav = useNavigate()
const logoutUser = () => {
  nav("/admin/login");
  logout({setLogged});
}

  return (
    <div className="menu-top">
      <div className="menu-top-left">
        <img className="menu-top-left-logo"
          src={Sito}
          alt="Logo Principal"/>
          {/* // ! cambiamos de forma dinamica el estado del menu sider */}
          <Button type="link" onClick={()=> setMenuCollapsed(!menuCollapsed)}>
           {
             menuCollapsed ? <MenuOutlined /> : <MenuFoldOutlined />
           }
          </Button>
      </div>
      <div className="menu-top-right">
        <Button type="link" onClick={logoutUser}>
         <PoweroffOutlined />
        </Button>
      </div>
    </div>
  )
}
