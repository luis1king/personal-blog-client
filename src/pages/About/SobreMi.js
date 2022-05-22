import { Avatar, Col, Rate, Row } from 'antd';
import { Timeline } from 'antd';
import React from 'react'
import me from '../../assets/IMG_20220521_193955.jpg';
import './SobreMi.scss'


export const SobreMi = () => {
  return (
    <Row className='about'>
      <Col span={24} className='banner'>
        <Col span={8}  className='banner-avatar'>
        <Avatar
        size={{xs:120, md:150, xxl:150}}
        src={me}
        />
        <h2>Luis Huang</h2>
        <h3>DESARROLLADOR WEB Y EMPRENDEDOR.</h3>
        </Col>
      </Col>
       <Col span={24} className='title'>
        <h1>SOBRE MÍ</h1>
        <Row>

        <Col span={3} xs={1}/>
        <Col span={18} xs={22}>

        <p>¡Hola 👋! Mi nombre es Luis Huang. Nací el 22 de marzo de 1994 en Madrid, España, donde llevo viviendo toda mi vida.
         Soy un apasionado del deporte y del mundo del fitness, cabe destacar que mi deporte favorito es el fútbol ⚽ y la calistenia 🏋.
        <br />
        <br />
        Estudié Administración y Dirección de Empresas en la URJC 👨‍🎓, y desde el 2015 me adentré en el mundo financiero, 
         donde aprendí las diferentes estrategias de inversión, productos finacieros y metodos de operativa bursátil.
        <br/>
        Cuando tenía 15 años, estuve ayudando a mis padres en el negocio familiar.
         A los 20 años, estaba trabajando 🧑‍💼 como mozo de almacén y con 24 años estaba trabajando como responsable de una empresa de distribución al por mayor, conocidos como "Cash & Carry".
        <br/>
        <br/>
        Actualmente me encuentro realizando una formacion de programación 👨‍💻, concretamente se trata de un Bootcamp o intensivo, 
        <br/>
        hasta el momento me he formado en lenguasjes como Java y sobretodo en JavaScript. 
        En la parte del Frontend, me he especializado en React, y por la parte del Backend, con Node.js y Express. 
        <br/>
        En cuanto a la parte de la BBDD, tengo experiencia trabajando con MongoDB.
        </p>
        </Col>

        <Col span={3} xs={1}/>
        </Row>
       </Col>
      <Col span={24} className='skills'>
      <h1>SKILLS</h1>
      <div className='tabla'>

      <table className="table table-primary table-striped">
  <thead>
    <tr className="">
      <th scope="col">Habilidad</th>
      <th scope="col">Nivel</th>
      <th scope="col">Descripción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Inglés <img src="https://img.icons8.com/color/48/000000/great-britain.png"/></th>
      <td><Rate disabled defaultValue={3} style={{color:'#007dff'}}/></td>
      <td>Nivel B2 de Inglés</td>
    </tr>
    <tr>
      <th scope="row">Chino <a target="_blank" href="https://icons8.com/icon/17962/china"><img src="https://img.icons8.com/color/48/000000/china.png"/></a></th>
      <td><Rate disabled defaultValue={4} style={{color:'#007dff'}}/></td>
      <td>Mejor nivel hablado que escrito</td>
    </tr>
    <tr>
      <th scope="row">Español <img src="https://img.icons8.com/color/48/000000/spain-2.png"/></th>
      <td><Rate disabled defaultValue={5} style={{color:'#007dff'}}/></td>
      <td>Idioma materno</td>
    </tr>
    <tr>
      <th scope="row">Carnet de operador de 
      <br/>
       carretillas homologado <img src="https://img.icons8.com/color/48/000000/fork-lift.png"/></th>
      <td><Rate disabled defaultValue={5} style={{color:'#007dff'}}/></td>
      <td colspan="2">Manejo de 5 carretillas, especialmente con <br/>
       transpaletas, apiladora y frontal.
      </td>
    </tr>
    <tr>
      <th scope="row">Carnet de conducir <img src="https://img.icons8.com/color/48/000000/driver-license-card.png"/></th>
      <td><Rate disabled defaultValue={5} style={{color:'#007dff'}}/></td>
      <td>15 puntos, más de 8 años de experiencia</td>
    </tr>
    <tr>
      <th scope="row">Trabajo presión <img src="https://img.icons8.com/color/48/000000/people-working-together.png"/></th>
      <td><Rate disabled defaultValue={5} style={{color:'#007dff'}} /></td>
      <td>Acostumbrado a trabajar de forma ágil y hacer frente al caos</td>
    </tr>
    <tr>
      <th scope="row">Trading de futuros <img src="https://img.icons8.com/color/48/000000/candle-sticks.png"/></th>
      <td><Rate disabled defaultValue={5} style={{color:'#007dff'}}/></td>
      <td>Más de 6 años de experiencia, operando los mercados financieros</td>
    </tr>
    <tr>
      <th scope="row">Comercial / Ventas <img src="https://img.icons8.com/color/48/000000/sell.png"/></th>
      <td><Rate disabled defaultValue={5} style={{color:'#007dff'}}/></td>
      <td>Venta presencial y telefónica. Venta cruzada y captación de clientes.</td>
    </tr>
    </tbody>
  </table>
      </div>
      </Col>

      <Col span={24} className='experiencia'>
        <h1>EXPERIENCIA PROFESIONAL</h1>
        <Timeline>
        <Timeline.Item dot='💻'>
          <p className='item-title'>EXPERIENCIA IT</p>
          <p>-Conocimientos básicos sobre Java</p>
          <p>-HTML, CSS, y JavaScript</p>
          <p>-Autenticacion y BBDD usando Firebase</p>
          <p>-Gestión de estados con Redux</p>
          <p>-React Router V5 y V6</p>
          <p>-Chakra Ui, Bootstrap y Ant Desing</p>
          <p>-Node.js y Express para el backend</p>
          <p>-Base de Datos no relacionales, MongoDB</p>

        </Timeline.Item>
        <Timeline.Item  dot='💼'>
          <p className='item-title'>HIPER BUENO S.L ( Administrador/ Encargado/ Mozo )</p>
          <p>Tareas de mozo de almacén (Picking, reposición, ...)</p>
          <p>Responsable de la Nave (Ubicación de pallets, organización de la nave)</p>
          <p>Tareas Administrativas (Contabilidad básica, pago aproveedores, facturación...)</p>
          <p>Carga y descarga de pallets (Manejo de carretilla frontal elevadora)</p>
          <p>Recepción de albaranes y clasificación de mercancía</p>
          <p>Funciones de caja (Cobros, devoluciones)</p>
          <p>Gestión de RRHH (Nóminas, altas y bajas laborales)</p>
          <p>Atención al cliente y ventas (Venta cruzada, venta telefónica)</p>
          <p>Dirección de trabajadores (Dirigir un equipo de 5 empleados)</p>
        </Timeline.Item>
        <Timeline.Item  dot='💼'>
          <p className='item-title'>HIPER BUENO S.L ( Encargado/ Mozo )</p>
          <p>Reposición de productos</p>
          <p>Dirección de trabajadores (Dirigir un equipo de 5 empleados)</p>
          <p>Preparación de pedidos, empaquetado y flejado</p>
          <p>Funciones comerciales</p>
          <p>Responsable de la Nave (Preparación de rutas de reparto)</p>
        </Timeline.Item>
        <Timeline.Item  dot='💼'>
          <p className='item-title'>Negocio Familiar ( Mozo de almacén / cajero )</p>
          <p>Funciones de mozo de almacén (Preparación)</p>
          <p>Atención al cliente (Presencial y telefónica)</p>
          <p>Auxiliar de repartidor </p>
          <p>Cobro en caja</p>
          <p>Carga y descarga manual de mercancía</p>
        </Timeline.Item>
        <Timeline.Item dot='😉'>
        </Timeline.Item>
      </Timeline>
       </Col>
      <Col span={24}>
      </Col>
    </Row>
  )
}
