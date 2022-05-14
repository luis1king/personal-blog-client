import React, { useState, useEffect } from "react";
import {
  Switch,
  List,
  Button,
  Icon,
  Modal as ModalAntd,
  notification
} from "antd";
import {
  activateMenuApi,
  deleteMenuApi,
  updateMenuApi
} from "../../../api/menuApi.js";
import "./MenuWebList.scss";
import { AddMenuWebForm } from "./AddMenuWebForm/AddMenuWebForm";
import { EditMenuWebForm } from "./EditMenuWebForm/EditMenuWebForm";
import { Modals } from "../../../Components/Admin/UserList/Modal/Modals";
import { EditOutlined } from "@ant-design/icons";



const { confirm } = ModalAntd;

export const MenuWebList = (props) => {

    const { menu, setReloadMenuWeb } = props;
    const [listItems, setListItems] = useState([]);
    const [isVisibleModal, setIsVisibleModal] = useState(false);
    const [modalTitle, setModalTitle] = useState("");
    const [modalContent, setModalContent] = useState(null);
    const token = localStorage.getItem('token');

    useEffect(() => {
        setListItems(menu);
      }, [menu]);

      const activateMenu = (menu, status) => {
        const accesToken = token;
        activateMenuApi(accesToken, menu._id, status).then(response => {
          notification["success"]({
            message: response
          });
        });
      };
    
      const addMenuWebModal = () => {
        setIsVisibleModal(true);
        setModalTitle("Creando nuevo menú");
        setModalContent(
          <AddMenuWebForm
            setIsVisibleModal={setIsVisibleModal}
            setReloadMenuWeb={setReloadMenuWeb}
          />
        );
      };
    
      const deleteMenu = menu => {
        const accesToken = token;
    
        confirm({
          title: "Eliminar Menu",
          content: `¿Estas seguro de que quieres eliminar el menu ${menu.title}?`,
          okText: "Eliminar",
          okType: "danger",
          cancelText: "Cancelar",
          onOk() {
            deleteMenuApi(accesToken, menu._id)
              .then(response => {
                notification["success"]({
                  message: response
                });
                setReloadMenuWeb(true);
              })
              .catch(() => {
                notification["error"]({
                  message: "Error del servidor, intentelo más tarde."
                });
              });
          }
        });
      };
    
      const editMenuWebModal = menu => {
        setIsVisibleModal(true);
        setModalTitle(`Editando menu: ${menu.title}`);
        setModalContent(
          <EditMenuWebForm
            setIsVisibleModal={setIsVisibleModal}
            setReloadMenuWeb={setReloadMenuWeb}
            menu={menu}
          />
        );
      };


  return (
    <div className="menu-web-list">
      <div className="menu-web-list__header">
        <Button type="primary" onClick={addMenuWebModal}>
          Crear menú
        </Button>
      </div>

      <div className="menu-web-list__items">
      {
          listItems.map( item => (
              <MenuItem 
              key={item._id} 
              item={item}
              activateMenu={activateMenu}
              editMenuWebModal={editMenuWebModal}
              deleteMenu={deleteMenu}/>
          ))
      }
      </div>

      <Modals
        modalTitle={modalTitle}
        isVisibleModal={isVisibleModal}
        setIsVisibleModal={setIsVisibleModal}
      >
        {modalContent}
      </Modals>
    </div>
  )
}

function MenuItem (props) {
    
    const { item, activateMenu, editMenuWebModal, deleteMenu } = props;

    return (
      <List.Item
        actions={[
          <Switch
            defaultChecked={item.active}
            onChange={e => activateMenu(item, e)}
          />,
          <Button type="primary" onClick={() => editMenuWebModal(item)}>
            <EditOutlined />
          </Button>,
          <Button type="danger" onClick={() => deleteMenu(item)}>
            delete
          </Button>
        ]}
      >
        <List.Item.Meta title={item.title} description={item.url} />
      </List.Item>
    );
  }
