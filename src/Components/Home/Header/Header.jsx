import React, { useState, useEffect } from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import { getMenuApi } from "../../../api/menuApi";
import logo1 from "../../../assets/13.2 monkey-avatar.png"

export const Header = () => {
    const [menuData, setMenuData] = useState([]);

    useEffect(() => {
      getMenuApi().then(response => {
        const arrayMenu = [];
        response.menu.forEach(item => {
          item.active && arrayMenu.push(item);
        });
        setMenuData(arrayMenu);
      });
    }, []);
  return (
    <Menu className="navbar" mode="horizontal">
    <Menu.Item key={1} className="navbar__logo">
      <Link to={"/"}>
        <img src={logo1} alt="Luis Huang" />
      </Link>
    </Menu.Item>

    {menuData.map(item => {
      const external = item.url.indexOf("http") > -1 ? true : false;
      if (external) {
        return (
          <Menu.Item key={item._id} className="navbar__item">
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              {item.title}
            </a>
          </Menu.Item>
        );
      }
      return (
        <Menu.Item key={item._id} className="navbar__item">
          <Link to={item.url}>{item.title}</Link>
        </Menu.Item>
      );
      
    })}
    <Menu.Item  key={12}  className="navbar__item">
            <a target="_blank" rel="noopener noreferrer">
              HOLA
            </a>
          </Menu.Item>
  </Menu>
  )
}
