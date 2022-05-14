import { DeleteFilled, EditFilled, StopFilled, UserOutlined } from '@ant-design/icons';
import { Avatar, Badge, Button, List, Switch } from 'antd';
import React, { useEffect, useState } from 'react'
import { getAvatar } from '../../../api/Api';
import { ActiveUserList } from './ActiveUserList';
import { AllUserList } from './AllUserList';
import { EditUserForm } from './EditUserForm/EditUserForm';
import { Modals } from './Modal/Modals';
import "./UserList.scss"


export const UserList = (props) => {

    const { usersActive, users, setReload } = props;
    const [viewUsersActives, setViewUsersActives] = useState(true);
    const [isVisibleModal, setIsVisibleModal] = useState(false);
    const [modalTitle, setModalTitle] = useState("");
    const [modalContent, setModalContent] = useState(null);
   
    //*Modals buttons
    const editUser = (user) => {
      setIsVisibleModal(true);
      setModalTitle('Editar Usuario')
      setModalContent(<EditUserForm 
      user={user} 
      setIsVisibleModal={setIsVisibleModal}
      setReload={setReload}
      />)
    }

  return (
    <div className="list-users">
    <div className="list-users__header">
      <div className="list-users__header-switch">
        <Switch
          defaultChecked
          onChange={() => setViewUsersActives(!viewUsersActives)}
        />
        <span>
          {viewUsersActives ? "Usuarios Activos" : "Todos los Usuarios"}
        </span>
      </div>
      <Button type="primary">
        Nuevo usuario
      </Button>
    </div>

    {viewUsersActives ? (
     <ActiveUserList 
     usersActive={usersActive} 
     isVisibleModal={isVisibleModal}
     setIsVisibleModal={setIsVisibleModal}
     editUser={editUser}
      />
    ) : (
     <AllUserList 
     users={users}
     isVisibleModal={isVisibleModal}
     setIsVisibleModal={setIsVisibleModal}
     editUser={editUser}
     />
    )}

     <Modals
       isVisibleModal={isVisibleModal}
       setIsVisibleModal={setIsVisibleModal}
       modalTitle={modalTitle}
       modalContent={modalContent}
      >
      {modalContent}
      </Modals>

  </div>
  )
}


// Lista de usuarios (componente)

export const  Userss = (props) => {
  const { user, editUser, setReloadUsers } = props;
  const [avatar, setAvatar] = useState(null);

  useEffect(() => {
    if (user.avatar) {
      getAvatar(user.avatar).then(response => {
        setAvatar(response);
      });
    } else {
      setAvatar(null);
    }
  }, [user]);

  return (
    <List.Item
    actions={[
       <Button type="primary" onClick={() => editUser(user)}>
       <EditFilled />
       </Button>,
       <Button type="danger" onClick={''}>
       <StopFilled />
       </Button>,
       <Button type="danger" onClick={'showDeleteConfirm'}>
       <DeleteFilled />
       </Button>
    ]}>
        <List.Item.Meta
            avatar={
              (user.active === true) ? 
              <Badge dot color="green">
                <Avatar src={avatar} />
              </Badge> : <UserOutlined />
            }
            title={`${user.firstName} ${user.lastName}`}
            description={user.email}
        />
    </List.Item>
  )

}