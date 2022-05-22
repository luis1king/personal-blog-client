import { Col, Layout, Row } from 'antd'
import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from '../Components/Home/Navbar/Navbar.jsx';
import './BasicLayouts.scss'
import { Footer } from '../Components/Home/Footer/Footer.jsx';

export const BasicLayouts = () => {



  return (
   <>
     <Row>
        <Col lg={1} />
        <Col span={24}>
          <Navbar />
        </Col>
        <Col lg={4} />
      </Row>
      <Outlet/>
      <Footer/>
   </>
  )
}
