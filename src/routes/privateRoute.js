
import { Navigate } from 'react-router-dom';




export const PrivateRoute = ({children, logged}) => {
//si el usuario esta logueado, se muestra el dashboard
  return logged ? children : <Navigate to="/admin/login"></Navigate>
  
}