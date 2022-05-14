import { List} from 'antd';
import React from 'react'
import { Userss } from './UserList';


export const AllUserList = ({users, editUser}) => {
  return (
    <div>
        <List
            className="users-active"
            itemLayout="horizontal"
            dataSource={users}
            renderItem={user => <Userss user={user} editUser={editUser}/>}
        />
    </div>
  )
}
