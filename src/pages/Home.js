import React from 'react'
import { Features } from '../Components/Home/Features/Features'
import { MainBanner } from '../Components/Home/MainBanner/MainBanner'
import { MisProyectos } from '../Components/Home/MisProyectos/MisProyectos'



export const Home = () => {
  return (
    <>
       <MainBanner/> 
       <Features/>
       <MisProyectos/> 
    </>
  )
}
