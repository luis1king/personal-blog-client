import React from "react";
import { Row, Col } from "antd";
import "./MainBanner.scss";

export const MainBanner = () => {
  return (
    <div className="main-banner">
    <div className="main-banner__dark" />
    <Row>
      <Col lg={16}>
        <h2>
          Cambia tu futuro <br /> trabajando en tu presente.
        </h2>
        <h3>
          A través de cursos prácticos y desarrollando proyectos reales, 
          <br />
          diseñados por profesionales con años de experiencia.
        </h3>
      </Col>
    </Row>
  </div>
  )
}
