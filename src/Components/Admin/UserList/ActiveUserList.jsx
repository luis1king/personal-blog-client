import { DeleteFilled, EditFilled, StopFilled } from '@ant-design/icons';
import { List, Avatar, Button, Modal } from 'antd';
import React, { useEffect, useState } from 'react';
import { Userss } from './UserList';
import "./UserList.scss";


export const ActiveUserList = ({usersActive, editUser}) => {

  return (
    <div>
        <List
            className="users-active"
            itemLayout="horizontal"
            dataSource={usersActive}
            renderItem={user => 
            <Userss user={user} 
            editUser={editUser}/>
            }
        />
    </div>
  )
}

// Lo que renderiza
