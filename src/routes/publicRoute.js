
import { Navigate } from 'react-router-dom';



export const PublicRoute = ({children, logged}) => {


  return logged ? <Navigate to="/admin"></Navigate> : children
  
}