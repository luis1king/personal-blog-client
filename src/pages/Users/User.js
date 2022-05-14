import React, { useEffect, useState } from 'react'
import { getActiveUsers, getUsers } from '../../api/Api'
import { UserList } from '../../Components/Admin/UserList/UserList';

export const User = () => {

  const [users, setUsers] = useState([]);
  const [usersActive, setUsersActive] = useState([]);
  // Para controlar el refres al actualizar user
  const [reload, setReload] = useState(false)
  const token = localStorage.getItem('token');

  useEffect(() => {
    getUsers(token).then(response => setUsers(response))
    getActiveUsers(token, true).then(response => setUsersActive(response))
    setReload(false)
  },[token, reload])

  return (
    <div className='users'>
    <UserList users={users} usersActive={usersActive} setReload={setReload}/>
    </div>
  )
}
