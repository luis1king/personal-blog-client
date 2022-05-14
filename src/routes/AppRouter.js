import React, {  useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { refreshToken } from '../api/Api'
import { AdminLayouts } from '../layouts/AdminLayouts'
import { BasicLayouts } from '../layouts/BasicLayouts'
import { Admin } from '../pages/Admin/Admin'
import { MenuWeb } from '../pages/Admin/Menu-Web/MenuWeb'
import { Login } from '../pages/auth/Login/Login'
import { Contact } from '../pages/Contact'
import { Error404 } from '../pages/Error404'
import { Home } from '../pages/Home'
import { SobreMi } from '../pages/About/SobreMi'
import { User } from '../pages/Users/User'
import { PrivateRoute } from './privateRoute'
import { PublicRoute } from './publicRoute'


export const AppRouter = () => {

  const [logged, setLogged] = useState(false)

  const token = localStorage.getItem('token')

  useEffect(() => {
   refreshToken({setLogged});
  }, [token])

  console.log(logged)
  return (
    <Routes>
        <Route path="/admin" element={
          <PrivateRoute logged={logged}>
           <AdminLayouts setLogged={setLogged}/>
          </PrivateRoute>
       }>
       
        <Route index element={<Admin/>}/>
        <Route path="users" element={<User/>}/>
        <Route path="menu-web" element={<MenuWeb/>}/>
        </Route>
        
        <Route path="/admin/login" element={
          <PublicRoute logged={logged}>
           <Login setLogged={setLogged}/>
          </PublicRoute>
        }/> 
          
        <Route path="/" element={<BasicLayouts/>}>
            <Route index element={<Home/>}/>
            <Route path="contact" element={<Contact/>}/>
            <Route path="about" element={<SobreMi/>}/>
        </Route>
        <Route path='*' element={<Error404/>} />
    </Routes>
  )
}
