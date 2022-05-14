import React from 'react'
import { Row, Col, Card } from "antd";
import Meta from 'antd/lib/card/Meta';
import briefcase from "../../../assets/briefcase.svg";
import reading from "../../../assets/reading.svg";
import clock from "../../../assets/clock.svg";
import assistant from "../../../assets/assistant.svg";
import ratings from "../../../assets/ratings.svg";
import currency from "../../../assets/currency_exchange.svg";

import "./Features.scss"

export const Features = () => {
  return (
    <Row className="features">
      <Col lg={24} className="features__title">
        <h2>¿Cómo puedo empezar?</h2>
        <h3>
          Cada curso cuenta con contenido bajo la web de Udemy, activa las 24
          horas al día los 365 días del año
        </h3>
      </Col>

      <Col lg={4} />
      <Col lg={16}>
        <Row className="row-cards">
          <Col md={8}>
            <Card 
            cover={
                <img src={reading} />
            }
            >
              <Meta 
              title="Aprende con cursos"
              description="Aprende a desarrollar una web, app móvil o programas para sistemas operativos como Windows"
            />
            </Card>
          </Col>
          <Col md={8}>
            <Card 
            cover={
                <img src= {clock} />
            }
            >
              <Meta 
              title="Acceso 24/7"
              description="Accede a los cursos en cualquier momento, desde cualquier lugar sin importar día y hora."
            />
            </Card>
          </Col>
          <Col md={8}>
            <Card 
            cover={
                <img src= {assistant} />
            }
            >
              <Meta 
              title="Soporte"
              description="Respuesta a todas las preguntas que surjan durante el proceso de aprendizaje."
            />
            </Card>
          </Col>
        </Row>

        <Row className="row-cards">
        <Col md={8}>
            <Card 
            cover={
                <img src= {ratings} />
            }
            >
              <Meta 
              title="Acceso 24/7"
              description="Completa los ejercicos y test. Además puedes participar en intensivos, donde se desarrollan proyectos reales"
            />
            </Card>
          </Col> 
          <Col md={8}>
            <Card 
            cover={
                <img src= {briefcase} />
            }
            >
              <Meta 
              title="Encuentra trabajo"
              description="A través de nuestra bolsa de empleo, puedes postular en las candidaturas que más se ajusten a tu necesidad."
            />
            </Card>
          </Col>      
          <Col md={8}>
            <Card 
            cover={
                <img src= {currency} />
            }
            >
              <Meta 
              title="Gratuito"
              description="A través de Open Bootcamp, puedes acceder a todos los costes sin ningún coste."
            />
            </Card>
          </Col>

        </Row>
      </Col>
      <Col lg={4} />
    </Row>
  )
}
