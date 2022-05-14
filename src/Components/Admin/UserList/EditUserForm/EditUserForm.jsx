import { Avatar, Button, Col, Form, Input, notification, Row, Select } from 'antd';
import React, { useCallback, useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone';
import './EditUserForm.scss'
import monkeys from '../../../../assets/13.2 monkey-avatar.png'
import { getAvatar, updateUser, UpdateUser, uploadAvatar } from '../../../../api/Api';

export const EditUserForm = ({user, setIsVisibleModal, setReload}) => {

  const [avatar, setAvatar] = useState(null);
  const [avatarUrl, setAvatarUrl] = useState(null);
  const [userData, setUserData] = useState({});
  console.log(userData)
    
    useEffect(() => {
      setUserData({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        role: user.role,
        avatar: user.avatar
      });
    }, [user]);
    
    useEffect(() => {
      if (user.avatar) {
        getAvatar(user.avatar).then(response => {
          setAvatar(response);
        });
      } else {
        setAvatar(null);
      }
      // Se ejecuta siempre cvuando cambia el usuario
    }, [user]);
    
    useEffect(() => {
      if (avatar) {
        setUserData({ ...userData, avatar: avatar.file });
        if (avatar.preview) {
          setAvatarUrl(avatar.preview);
          console.log(avatar)
        } else {
          setAvatarUrl(avatar);
        }
      }else {
        setAvatarUrl(null);
      }
    }, [avatar]);

    // Funcion para subir una imagen
    const onDrop = useCallback(
        acceptedFiles => {
          const file = acceptedFiles[0];
          setAvatar({ file, preview: URL.createObjectURL(file) });
        },
        [setAvatar]
      );
      const { getRootProps, getInputProps, isDragActive } = useDropzone({
        accept: "image/jpeg, image/png",
        noKeyboard: true,
        onDrop
      });

    // Update user
      const handleSubmit = () => {
        const token = localStorage.getItem('token')
        const userUpdate = userData;
     if (!userUpdate.firstName || !userUpdate.lastName || !userUpdate.email) {
      notification["error"]({
        message: "El nombre, apellidos y email son obligatorios."
      });
      return;
    }

    if (userUpdate.password) {
      notification["success"]({
        message: "Contraseña modificada correctamente"
      });
    }

    if (typeof userUpdate.avatar === "object") {
      uploadAvatar(token, userUpdate.avatar, user._id).then(response => {
        userUpdate.avatar = response.avatarName;
        updateUser(token, userUpdate, user._id).then(result => {
          notification["success"]({
            message: result.message
          });
          setIsVisibleModal(false);
          setReload(true);
        });
      });
    } else {
      updateUser(token, userUpdate, user._id).then(result => {
        notification["success"]({
          message: result.message
        });
        setIsVisibleModal(false);
        setReload(true);
      });
    }
  };
  return (
    <div className="edit-user-form">
     <div className="upload-avatar" {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <Avatar size={150} src={monkeys} />
      ) : (
        <Avatar size={150} src={avatarUrl ? avatarUrl : monkeys} />
      )}
     </div>
        {/* Aqui va el formulario */}
     <Form className="form-edit" onFinish={handleSubmit} onSubmit={handleSubmit}>
      <Row gutter={24}>
        <Col span={12}>
          <Form.Item>
            <Input
              placeholder="Nombre"
              value={userData.firstName}
              onChange={e => setUserData({ ...userData, firstName: e.target.value })}
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item>
            <Input
              placeholder="Apellidos"
              value={userData.lastName}
              onChange={e =>
                setUserData({ ...userData, lastName: e.target.value })
              }
            />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={24}>
        <Col span={12}>
          <Form.Item>
            <Input
              placeholder="Correo electronico"
              value={userData.email}
              onChange={e =>
                setUserData({ ...userData, email: e.target.value })
              }
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item>
            <Select
              placeholder="Seleccióna una rol"
              onChange={e => setUserData({ ...userData, role: e })}
              value={userData.role}
            >
              <Select.Option value="admin">Administrador</Select.Option>
              <Select.Option value="editor">Editor</Select.Option>
              <Select.Option value="reviewr">Revisor</Select.Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={24}>
        <Col span={12}>
          <Form.Item>
            <Input
              type="password"
              placeholder="Contraseña"
              onChange={e =>
                setUserData({ ...userData, password: e.target.value })
              }
            />
          </Form.Item>
        </Col>
      </Row>

      <Form.Item>
      <Button type="primary" htmlType="submit" className="btn-submit">
          Actualizar Usuario
        </Button>
      </Form.Item>
    </Form>
     </div>

  )
}
