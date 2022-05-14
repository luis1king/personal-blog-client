import { Card, Col, Row } from 'antd'
import React from 'react'

import java from '../../../assets/javascript-es6.jpg';
import css from '../../../assets/css-grid.jpg';
import native from '../../../assets/react-native.jpg';

import './MisProyectos.scss'

export const MisProyectos = () => {
  return (
    <Row className='proyectos'>
    <Col span={24}  className='proyectos_title'>
        Mis Proyectos
    </Col>
    

  <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4 g-md-1 container">
    <div className="col">
      <div className="card">
       <a href="https://github.com/luis1king/journalApp" target="_blank">
       <img src={java} className="card-img-top" alt="..."/>
       <div className="card-body">
        <h5 className="card-title">Card title</h5>
       </div>
       </a>
    </div>
  </div>
  <div className="col">
      <div className="card">
       <a href="https://github.com/luis1king/journalApp" target="_blank">
       <img src={java} className="card-img-top" alt="..."/>
       <div className="card-body">
        <h5 className="card-title">Card title</h5>
       </div>
       </a>
    </div>
  </div>
  <div className="col">
      <div className="card">
       <a href="https://github.com/luis1king/journalApp" target="_blank">
       <img src={java} className="card-img-top" alt="..."/>
       <div className="card-body">
        <h5 className="card-title">Card title</h5>
       </div>
       </a>
    </div>
  </div>
  <div className="col">
      <div className="card">
       <a href="https://github.com/luis1king/journalApp" target="_blank">
       <img src={java} className="card-img-top" alt="..."/>
       <div className="card-body">
        <h5 className="card-title">Card title</h5>
       </div>
       </a>
    </div>
  </div>
  <div className="col">
      <div className="card">
       <a href="https://github.com/luis1king/journalApp" target="_blank">
       <img src={java} className="card-img-top" alt="..."/>
       <div className="card-body">
        <h5 className="card-title">Card title</h5>
       </div>
       </a>
    </div>
  </div>

  
  <div className="col">
      <div className="card">
       <a href="https://github.com/luis1king/journalApp" target="_blank">
       <img src={java} className="card-img-top" alt="..."/>
       <div className="card-body">
        <h5 className="card-title">Card title</h5>
       </div>
       </a>
    </div>
  </div>
  
  

</div>
      
      

    </Row>
  )
}
