import { Col, Row } from 'antd'
import React from 'react'
import jorunal from '../../../assets/journal.jpg';
import gift from '../../../assets/gift.jpg';
import hero from '../../../assets/hero.jpg';
import blog from '../../../assets/blog.jpg';
import todo from '../../../assets/todo mern.jpg';
import foro from '../../../assets/foro.jpg';

import './MisProyectos.scss'

export const MisProyectos = () => {
  return (
    <Row className='proyectos'>
    <Col span={24}  className='proyectos_title'>
        Mis Proyectos
    </Col>
    

  <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4 g-md-1  container">
    <div className="col">
      <div className="card">
       <a href="https://github.com/luis1king/journalApp" target="_blank">
       <img src={jorunal} className="card-img-top" alt="..."/>
       <div className="card-body">
        <h5 className="card-title">Journal App</h5>
       </div>
       </a>
    </div>
  </div>
  <div className="col">
      <div className="card">
       <a href="https://github.com/luis1king/react-heroesApp" target="_blank">
       <img src={hero} className="card-img-top" alt="..."/>
       <div className="card-body">
        <h5 className="card-title">Hero App</h5>
       </div>
       </a>
    </div>
  </div>
  <div className="col">
      <div className="card">
       <a href="https://github.com/luis1king/journalApp" target="_blank">
       <img src={blog} className="card-img-top" alt="..."/>
       <div className="card-body">
        <h5 className="card-title">Personal Blog (MERN)</h5>
       </div>
       </a>
    </div>
  </div>
  <div className="col">
      <div className="card">
       <a href="https://github.com/luis1king/react-giftapp" target="_blank">
       <img src={gift} className="card-img-top" alt="..."/>
       <div className="card-body">
        <h5 className="card-title">Gift App</h5>
       </div>
       </a>
    </div>
  </div>
  <div className="col">
      <div className="card">
       <a href="https://github.com/luis1king/mern-todo-app" target="_blank">
       <img src={todo} className="card-img-top" alt="..."/>
       <div className="card-body">
        <h5 className="card-title">Todo App (MERN)</h5>
       </div>
       </a>
    </div>
  </div>

  
  <div className="col">
      <div className="card">
       <a href="https://github.com/luis1king/Foro-SC" target="_blank">
       <img src={foro} className="card-img-top" alt="..."/>
       <div className="card-body">
        <h5 className="card-title">Forum App</h5>
       </div>
       </a>
    </div>
  </div>
  
  

</div>
      
      

    </Row>
  )
}
