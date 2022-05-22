import { Row, Tag } from 'antd'
import React from 'react'
import { useState } from 'react'
import './Topic.scss'


export const Topics = ({ setTopic, setPage }) => {

  const [temas, settemas] = useState([ 
    {
    topic: "tecnology",
    color:"default",
    title:'Tecnología e Informática',
    emoji: '💻'
    },
    {
      topic: "personal",
      color:"processing",
      title:'Personal',
      emoji: '🙋‍♂️'
    },
    {
        topic: "fitness",
        color:"error",
        title:'Fitness y Deporte',
        emoji:'🏋'
    },
    {
      topic: "viajes",
      color:"processing",
      title:'Viajes',
      emoji:'🚊'
  },
  {
    topic: "negocios",
    color:"warning",
    title:'Negocios',
    emoji:'💰'
  },
  {
    topic: "trading",
    color:"success",
    title:'Trading y Finazas',
    emoji:'💹'
},
{
  topic: "food",
  color:"default",
  title:'Comida',
  emoji:'🍽'
},
{
  topic: "car",
  color:"error",
  title:'Coches',
  emoji:'🚗'
},
{
  topic: "foto",
  color:"default",
  title:'Fotografía',
  emoji:'📷'
},
{
  topic: "otros",
  color:"default",
  title:'Otros',
  emoji:'🖋'
},
    ]);


  const handleSubmit =  (topic) => {
    setTopic(topic);
    setPage(1);
  }

  return (
      <Row className='topic'>
    <Row className='topic-title'><h4>Temas</h4></Row> 
    <div className="topics">
        <ul>
          {
            temas.map(temas => 
            <li key={temas.topic} onClick={() => handleSubmit(temas.topic)}>
            <Tag color={temas.color}>{temas.emoji} {temas.title}</Tag>
            </li> 
             )
          }
        
            {/* <li onClick={handleSubmit}><Tag color="default" >&#128187; Tecnología e Informática</Tag></li>
            <li><Tag color="processing">🙋‍♂️ Personal</Tag></li>
            <li><Tag color="error">🏋 Fitness</Tag></li>
            <li><Tag color="processing">🚊 Viajes</Tag></li>
            <li><Tag color="warning">&#128176; Negocios</Tag></li>
            <li><Tag color="success">💹 Trading y Finanzas</Tag></li>
            <li><Tag color="default">🍽 Comida</Tag></li>
            <li><Tag color="error">🚗 Coches</Tag></li>
            <li><Tag color="default">📷 Fotografía</Tag></li>
            <li><Tag color="default">🖋 Otros</Tag></li> */}
    </ul>
    </div>
      </Row>
  )
}
