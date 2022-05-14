import React from 'react'
import { Result, Button } from 'antd';
import { useNavigate } from 'react-router-dom';

  

export const Error404 = () => {

  const nav = useNavigate()
  
  return (
    

  <Result
    status="404"
    title="404"
    subTitle="Perdona, la página que solicitas no existe."
    extra={<Button type="primary" onClick={()=> nav(-1)}>Volver</Button>}
  />
  
  )

  
}
